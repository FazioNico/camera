import { Injectable } from "@angular/core";
import { Camera, CameraResultType } from '@capacitor/core'
@Injectable({
  providedIn: 'root'
})
export class CameraService {

  async takePicture() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      quality: 100
    });
    return image?.webPath;
  }
}
