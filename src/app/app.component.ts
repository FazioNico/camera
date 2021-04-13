import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { CameraService } from './camera.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Camera';
  imgUrl: string = null;

  constructor(
    private _camera: CameraService
  ) {}

  async takePicture(): Promise<void> {
    const imgUrl = await this._camera.takePicture();
    console.log('--->', imgUrl);
    this.imgUrl = imgUrl;
  }
}
