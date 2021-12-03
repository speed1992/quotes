for f in *.js; do 
    mv -- "$f" "${f%.txt}.json"
done