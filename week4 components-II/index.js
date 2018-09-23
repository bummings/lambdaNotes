class TabLink {
  constructor(link) {
    this.link = link;
    this.linkData = this.link.dataset.tab;
    
    this.tabContent = document.querySelector(`.content[data-tab='${this.linkData}']`);
   
    this.link.addEventListener('click', () => {this.linkClick(event) });
    
    //console.log(this.tabContent);
    this.tabContent = new Content(this.tabContent); 
  }
  
  linkClick() {
    this.tabContent.toggleContent();
  }
}

class Content {
  constructor(tabContent) {
    this.tabContent = tabContent;
    console.log(this.tabContent);
  }
  toggleContent() {
    this.tabContent.classList.toggle('change');
  }
}


let links = document.querySelectorAll('.link');
links = Array.from(links).map( link => new TabLink(link));