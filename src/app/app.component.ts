import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

 params = {required: true, 
           type: 'text',
           label: 'label', 
           value: 'asdf', 
           variants: ['psql', 'msql', 'asdf'],
           patterns:[{pattern:/^(msql|psql|part1,part2)$/, error: 'SHORT'}]}
}
