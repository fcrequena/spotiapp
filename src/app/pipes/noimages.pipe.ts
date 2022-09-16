import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimages'
})
export class NoimagesPipe implements PipeTransform {
  /**
   *
   * @param images -> es el arreglo de imagenes que pueden venir
   * @param args
   * @returns
   */
  transform(images: any[] ): unknown {

    if(!images ){
      return 'assets/img/noimage.png';
    }

    if(images.length > 0){
      return images[0].url;
    }else{
      return 'assets/img/noimage.png';
    }

  }

}
