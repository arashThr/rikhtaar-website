var sizeOf = require('image-size');

hexo.extend.tag.register('slides', function(args) {
  var id = args[0];

  let pics = '';

  let name = args[0]
  let len = parseInt(args[1]);

  for (let i = 1; i<=len; i++) {
    var filename = `source/_posts/${name}/${name}_${i}.jpg`;
    try {
      let dims = sizeOf(filename);
      pics += `
        <figure class="col-md-5 itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
          <a href="${hexo.config.root}${name}/${name}_${i}.jpg" itemprop="contentUrl" data-size="${dims.width}x${dims.height}">
              <img src="${hexo.config.root}${name}/thumbs/${name}_${i}.jpg" itemprop="thumbnail" alt="Image description" />
          </a>
          <!-- <figcaption itemprop="caption description">Image caption  1</figcaption> -->
        </figure>`
    } catch (err) {
      console.error('Error in size');
    }  
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
      <a id="myBtn" class="btn btn-secondary float-left">سفارش</a>
      
      <!-- The Modal -->
      <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>امکان سفارش در حال حاضر مقدور نیست و به زودی فعال می‌شود.</p>
          <p>از اینکه صبورانه همراه ما هستید متشکریم.</p>
        </div>
      
      </div>`;

  return `<div class="float-left">
    <p>${args[1]} هزار تومان</p>
    <a id="myBtn" class="btn btn-secondary float-left">سفارش</a>    
  </div>
  
  <!-- The Modal -->
  <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
          <span class="close">&times;</span>
          <p>قبل از سفارش به نکات زیر توجه فرمایید:<br>
          <ul>
  <li>کلیه سفارشات پس از ثبت ظرف ۴۸ ساعت ارسال خواهند شد و قبل از ارسال جهت هماهنگی با شما تماس گرفته می‌شود.</li>
  <li>به دلیل اینکه آثار دست ساختند، محصول دریافتی شما در برخی جزییات مانند رنگ و بافت ممکن است با تصویری که از محصول می‌بینید تفاوت داشته باشد.</li>
  <li> در صورتیکه پس از دریافت محصول متوجه هر نوع ایراد اعم از شکستگی یا ناقص بودن محتویات جعبه شدید در اسرع وقت موضوع را اطلاع دهید.</li>
  <li>به دلیل اینکه آثار در تعداد محدود ساخته می‌شوند در صورت ناموجود بودن محصول درخواستی شما می‌توانید از طریق دکمه چت موجود در سایت درخواست تولید مجدد محصول کنید. درخواست شما پس از بررسی پاسخ داده می‌شود و در صورت امکان محصول مورد نظر برای شما ساخته خواهد شد. </li>
      </ul>
  از اینکه در این مسیر با ما همراه شده‌اید صمیمانه سپاسگذاریم.<br>
  گروه ریختار</p>
          <div>
              <a class="btn btn-secondary sell-btn" href="${link}" target="_blank">سفارش اینترنتی</a>
              <a class="btn btn-secondary sell-btn" href="https://t.me/rikhtaarbot" target="_blank">پرداخت در محل</a>        
          </div>
      </div>
  </div>`;
});