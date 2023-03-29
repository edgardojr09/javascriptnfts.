// create a variable to hold your NFT's
let collectionNFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
// DOG, gender, age, color, breeds
function mintNFT(_gender, _age, _color, _breeds) {
  const dog = {
    gender: _gender,
    age: _age,
    color: _color,
    breeds: _breeds,
  }
  collectionNFT.push(dog); }

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for(let i = 0; i < collectionNFT.length; i++) {
      console.log(collectionNFT[i]);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply () {
  console.log("TOTAL NFT: " + collectionNFT.length);
}

// call your functions below this line

mintNFT("BROWN", 4, "MALE", 15);
mintNFT("WHITE", 4, "MALE", 8);
mintNFT("BLACK", 4, "FEMALE", 5);
mintNFT("BLUE", 4, "MALE", 1);
mintNFT("PINK", 4, "FEMALE", 2);
mintNFT("RED", 4, "MALE", 10);

listNFTs();
getTotalSupply()
