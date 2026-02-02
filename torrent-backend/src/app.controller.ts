import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('search')
  searchTorrents(@Query('q') query: string) {
    if (!query) return { message: `Írjon be valamit valahogy így: (?q=keresett_elem)`}

    return this.appService.search(query);
  }

  @Get('categories')
  getCategories() {
    return this.appService.getCategoriesAPI()
  }
}
