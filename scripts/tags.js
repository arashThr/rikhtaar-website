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
      console.error('Error in size', err);
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


hexo.extend.tag.register('sale', function (args) {
  let productName = args[0] || 'this product';
  // Create a unique ID from product name
  let uniqueId = productName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();

  return `
  <a href="#" class="btn btn-secondary float-left" onclick="document.getElementById('${uniqueId}-modal').style.display='block'; return false;">Express Interest</a>

  <!-- The Modal -->
  <div id="${uniqueId}-modal" class="modal" style="display:none;">
    <!-- Modal content -->
    <div class="modal-content interest-modal">
      <span class="close" onclick="document.getElementById('${uniqueId}-modal').style.display='none'">&times;</span>
      <h2 class="modal-title">Love this piece?</h2>
      <p class="modal-description">We'd love to hear from you! Share your email and let us know you're interested in <strong>${productName}</strong>. We'll get back to you soon.</p>

      <form name="interest" method="POST" netlify action="/success" class="interest-form">
        <input type="hidden" name="form-name" value="interest" />
        <input type="hidden" name="product" value="${productName}" />

        <div class="form-group">
          <label for="email-${uniqueId}">Your Email *</label>
          <input type="email" id="email-${uniqueId}" name="email" required placeholder="your@email.com">
        </div>

        <div class="form-group">
          <label for="price-${uniqueId}">What would you consider paying?</label>
          <input type="text" id="price-${uniqueId}" name="price" placeholder="e.g., $50 (optional)">
        </div>

        <div class="form-group">
          <label for="comments-${uniqueId}">Any questions or thoughts?</label>
          <textarea id="comments-${uniqueId}" name="comments" rows="3" placeholder="Tell us what you're thinking... (optional)"></textarea>
        </div>

        <button type="submit" class="btn btn-primary submit-btn">Send</button>
      </form>
    </div>
  </div>

  <script>
    // Close modal when clicking outside
    document.getElementById('${uniqueId}-modal').addEventListener('click', function(e) {
      if (e.target === this) {
        this.style.display = 'none';
      }
    });
  </script>`;
});
