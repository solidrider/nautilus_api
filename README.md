# nautilus_api

## シェープファイル（shp）の SQL ファイル変換

shp2pgsql -W cp932 -D -I -s 4612 [***].shp [table 名] > [***].sql

## 変換済み SQL ファイルの DB 読み込み

heroku pg:psql -a n2i-nautilus-api < [***].sql
