```
hexo new nowruz
hexo clean && hexo g
hexo serve
# To publish
hexo deploy
```

- Compress images with http://optimizilla.com/
    - Appends `-min` to file name

- Watermark picture
`composite -dissolve 50% -gravity southEast logo-white.png nowruz_4.jpg nowruz_4.jpg`

- Create thumbnails
`sips -Z 400 n.jpg`

