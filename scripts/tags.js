hexo.extend.tag.register('slides', function(args) {
  var id = args[0];

  let pics = '';

  let name = args[0]
  let len = parseInt(args[1]);
  let size = args[2] || '1600x1066';

  for (let i = 1; i<=len; i++) {
    pics += `
    <figure class="col-md-5 itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
      <a href="${hexo.config.root}${name}/${name}_${i}.jpg" itemprop="contentUrl" data-size="${size}">
          <img src="${hexo.config.root}${name}/thumbs/${name}_${i}.jpg" itemprop="thumbnail" alt="Image description" />
      </a>
      <!-- <figcaption itemprop="caption description">Image caption  1</figcaption> -->
    </figure>`
  }

  return `
    <div dir="ltr" class="row my-gallery" itemscope itemtype="http://schema.org/ImageGallery">
      ${pics}
    </div>`;
});

hexo.extend.tag.register('order', function (args) {
  let link = args[0];

  if (link == null) 
    return `
      <!-- Trigger/Open The Modal -->
      <a id="myBtn" class="btn btn-secondary">سفارش</a>
      
      <!-- The Modal -->
      <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>امکان سفارش در حال حاضر مقدور نیست و به زودی فعال می‌شود.</p>
          <p>از اینکه صبورانه همراه ما هستید متشکریم.</p>
        </div>
      
      </div>`;

  return `<a class="btn btn-secondary" href="${link}" target="_blank">سفارش</a>`
});