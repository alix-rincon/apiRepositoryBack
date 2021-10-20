class LayoutMenu extends HTMLElement{
    
    constructor(){
        super();
    }

    connectedCallback(){
        let template = fetch('../.././js/layout/layoutMenu.html')
        .then(response => response.text())
        .then(data => this.innerHTML = data );
    }
    
}
window.customElements.define('layout-menu',LayoutMenu);