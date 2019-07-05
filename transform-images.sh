#!/bin/bash
mkdir thumbs
cp *.jpg thumbs
count=`ls *.jpg | wc -l | tr -d ' '`
echo Counter is $count
for i in `seq 1 $count`
do
	convert $i.jpg -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB -resize 1600x1600 $i.jpg
	composite -dissolve 50% -gravity southEast ../images/watermark/logo-white.png $i.jpg $i.jpg
	sips -Z 400 thumbs/$i.jpg
done

