# Simple HTTP Server for Credit Keeper Preview
$port = 8080
$path = "build\web"

Write-Host "`n🚀 Starting Credit Keeper Web Preview...`n" -ForegroundColor Green
Write-Host "📂 Serving from: $path" -ForegroundColor Cyan
Write-Host "🌐 Open browser: http://localhost:$port`n" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server`n" -ForegroundColor Gray

# Start HTTP server
python -m http.server $port --directory $path
