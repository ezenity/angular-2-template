import {Component} from "angular2/core";
import {Video} from './video';
import {document} from "angular2/src/facade/browser";

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']
})

export class PlaylistComponent {

    onSelect(vid:Video){

        console.log(JSON.stringify(vid));
    }
}