$rootPath = "E:\Visual Studio Code\Programming area\Programming_Challenge_Solutions"

# Get all directories recursively within the root path
$directories = Get-ChildItem -Path $rootPath -Recurse -Directory

# Loop through each directory
foreach ($directory in $directories) {
    # Define the path for the .gitkeep file
    $gitkeepPath = Join-Path -Path $directory.FullName -ChildPath ".gitkeep"

    # Check if the directory is empty (contains no files or subdirectories)
    if ((Get-ChildItem -Path $directory.FullName).Count -eq 0) {
        # Create the .gitkeep file if it does not exist
        if (-not (Test-Path -Path $gitkeepPath)) {
            New-Item -Path $gitkeepPath -ItemType "file" -Force
        }
    }
}