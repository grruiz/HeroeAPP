import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../pages/interfaces/heroe.interface';

@Pipe({
  name: 'heroeImagen'
})
export class HeroeImagenPipe implements PipeTransform {

  transform(value: Heroe): string {
    if (!value.id) {
      return `../../../../assets/no-image.png`;
    }
    return `../../../../assets/heroes/${value.id}.jpg`;
  }
}
