import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ProductGalleryItem} from '@@dashboard/models/product-gallery-item';
import {ProductsConfig} from '@@dashboard/config/products.config';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-product-gallery',
  templateUrl: 'product-gallery.component.html',
  styleUrls: ['product-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductGalleryComponent implements OnInit {

  public galleryItems: ProductGalleryItem[];
  public mainGalleryItem: ProductGalleryItem;
  public imagesContainers: any[];

  constructor(private domSanitizer: DomSanitizer) {
    this.imagesContainers = Array(ProductsConfig.MAX_GALLERY_SIZE);
    this.galleryItems = [];
  }

  @Input('files') set onGalleryFilesChange(files: File[]) {
    if (files.length) {
      this.mainGalleryItem = {imagePath: this.getSaveFileUrl(files[0])};
      this.galleryItems = files.map(file => ({imagePath: this.getSaveFileUrl(file)}));
    }
    // this.loadGalleryItems(files).then(() => {
    //   this.cdr.detectChanges();
    // });
  }

  ngOnInit(): void {}

  setMainImageByIndex(itemIndex: number): void {
    this.mainGalleryItem = this.galleryItems[itemIndex];
  }

  getImagePath(itemIndex: number): any {
    return this.galleryItems[itemIndex]?.imagePath;
  }

  private async loadGalleryItems(files: File[]): Promise<any> {
    const imagesPaths = await Promise.all(this.readFilesAsDataURLs$(files));
    if (imagesPaths.length) {
      this.galleryItems = [...this.galleryItems];
      for (let i = 0; i < ProductsConfig.MAX_GALLERY_SIZE && this.galleryItems.length < ProductsConfig.MAX_GALLERY_SIZE; i++) {
        this.galleryItems.push({imagePath: imagesPaths[i]});
      }
      if (!this.mainGalleryItem) {
        this.setMainImageByIndex(0);
      }
    }
  }

  private readFilesAsDataURLs$(files: File[]): Promise<string>[] {
    return Array.prototype.map.call(files, file => this.readAsDataURL$(file));
  }

  private readAsDataURL$(file): Promise<string> {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => {
        resolve(fr.result as string);
      };
      fr.onerror = reject;
      fr.readAsDataURL(file);
    });
  }

  drop(event: CdkDragDrop<string[]>): void{
    moveItemInArray(this.galleryItems, event.previousIndex, event.currentIndex);
  }

  private getSaveFileUrl(file: File): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
  }
}
