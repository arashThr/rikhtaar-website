hexo.extend.tag.register('slides', function(args) {
  var id = args[0];

  let pics = '';

  let name = args[0]
  let len = parseInt(args[1]);
  let size = args[2];

  for (let i = 1; i<=len; i++) {
    pics += `
    <figure class="col-md-5 itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
      <a href="${hexo.config.root}images/details/pics/${name}_${i}.jpg" itemprop="contentUrl" data-size="${size}">
          <img src="${hexo.config.root}images/details/thumbs/${name}_${i}.jpg" itemprop="thumbnail" alt="Image description" />
      </a>
      <!-- <figcaption itemprop="caption description">Image caption  1</figcaption> -->
    </figure>`
  }

  return `
  <div dir="ltr" class="row my-gallery" itemscope itemtype="http://schema.org/ImageGallery">
    ${pics}
  </div>`;
});