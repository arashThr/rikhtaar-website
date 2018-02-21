hexo.extend.helper.register('indexCover', function(path) {
    if (!path)
        return this.theme.default_cover_image;
    path = path.replace(/\\/, '/');
    let parts = path.split('/');
    let last = parts.length - 1;
    parts[last] = 'thumbs/' + parts[last];
    let result = this.url_for(parts.join('/'));
    return result;
});
