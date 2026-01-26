import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputStateService {
  searchQuery = signal<string>("");
  hasSearched = signal<boolean>(false);

  performSearch(inputText: string) {
    if (inputText.trim()) {
      this.searchQuery.set(inputText);
      this.hasSearched.set(true);

      console.log('Keresés elindítva');
    }
  }

  reset() {
    this.searchQuery.set("");
    this.hasSearched.set(false);
  }
}
