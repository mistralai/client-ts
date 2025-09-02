#!/bin/bash

failed=0

for file in examples/src/*.ts; do
    # Check if the file is not in the exclude list
    if [ -f "$file" ] && [[ ! " ${exclude_files[@]} " =~ " $file " ]]; then
        echo "Running $file"
        # Run the script and capture the exit status
        if npx tsx "$file" > /dev/null; then
            echo "Success"
        else
            echo "Failed"
            failed=1
        fi
    else
      echo "Skipped $file"
    fi
done

# If one of the example scripts failed, then exit
if [ $failed -ne 0 ]; then
    exit 1
fi
