import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    @Inject(DOCUMENT) private _document:Document,
    public title:Title,
    public meta:Meta
  ) 
  { }


  setCanonicalURL(url?: string) {
    const canURL = url ?? this._document.URL;
    const head = this._document.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this._document.querySelector('link[rel="canonical"]');
    if (!element) {
        // Si el elemento no existe, créalo
        element = this._document.createElement('link');
        element.setAttribute('rel', 'canonical');
        head.appendChild(element);
    }
    // Actualiza el atributo href del elemento existente o recién creado
    element.setAttribute('href', canURL);
}

  setIndexFollow(state:boolean=true){
    this.meta.updateTag({name:'robots',content:state?'index,follow':'noindex,nofollow'});
  }

}
