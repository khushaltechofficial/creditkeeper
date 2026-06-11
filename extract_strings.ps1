# Extract readable strings from libapp.so
param(
    [string]$FilePath = "decompiled_apk\extracted\lib\arm64-v8a\libapp.so",
    [int]$MinLength = 10
)

$bytes = [System.IO.File]::ReadAllBytes($FilePath)
$ascii = [System.Text.Encoding]::ASCII
$stringBuilder = New-Object System.Text.StringBuilder
$results = @()

for ($i = 0; $i -lt $bytes.Length; $i++) {
    $byte = $bytes[$i]
    
    # Printable ASCII range
    if ($byte -ge 32 -and $byte -le 126) {
        [void]$stringBuilder.Append([char]$byte)
    }
    else {
        if ($stringBuilder.Length -ge $MinLength) {
            $str = $stringBuilder.ToString()
            if ($str -match "(supabase|https://|http://|\.dart|customer|transaction|database|api|auth|login|signup|dashboard)") {
                $results += $str
            }
        }
        $stringBuilder.Clear()
    }
}

# Output results
$results | Select-Object -Unique | Sort-Object -Property Length -Descending | Select-Object -First 100 | Out-File "RECOVERED_PROJECT\libapp_strings.txt"
Write-Output "✅ Extracted $($results.Count) relevant strings to RECOVERED_PROJECT\libapp_strings.txt"
$results | Select-Object -First 20
