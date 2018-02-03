dir="./dist"
destdir="index.js"

echo "module.exports = {" >> "$destdir"

for f in "$dir"/*; do
  filename=${f%.js}
  line=${filename##*/}": require('"$dir"/"${filename##*/}"').default,"
  echo $line >> "$destdir"
done

echo "}" >> "$destdir"
