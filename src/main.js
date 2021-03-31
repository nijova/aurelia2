import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';

Aurelia
  .register(RouterConfiguration.customize({ title: 'AU2 Application' }))
  .app(MyApp)
  .start();
