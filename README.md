## Package
```
npm install
zip -r google-play-scraper index.js node_modules/
```

## Usage
```
aws lambda invoke --function-name google-play-scraper --payload '
{
  "command": "app",
  "options": {"appId": "com.dxco.pandavszombies"}
}' /dev/stdin >/dev/null
```
