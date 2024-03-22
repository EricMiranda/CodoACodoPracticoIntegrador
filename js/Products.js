function DrawProducts()
{
    let content = document.getElementById("Content");
    let products = GetAllProducts();
    let elements = "";
    products.forEach((p) => elements += "<div><img src=\""+p.Path+"\" alt=\"\"><p>"+p.Description+"</p></div>" );

    content.innerHTML = elements;
}

function GetAllProducts()
{
    let folderPath = "img/";
    // let products = new Object[4]();
    // let product = new Object();
    // //Cafe 1
    // product.Path = folderPath + "cafe001.png";
    // product.Description = "Cafe Brasil";
    // products[0] = product;
    // //Cafe 2
    // product.Path = folderPath + "cafe002.png";
    // product.Description = "Cafe Colombia";
    // products[0] = product;
    // //Cafe 3
    // product.Path = folderPath + "cafe003.png";
    // product.Description = "Cafe Peru";
    // products[0] = product;
    // //Cafe 4
    // product.Path = folderPath + "cafe004.png";
    // product.Description = "Cafe Colombia 2";
    // products[0] = product;
    let products = [];
    //Cafe 1
    products.push({
        Path: folderPath + "cafe001.png",
        Description: "Cafe Brasil"
    });
    //Cafe 2
    products.push({
        Path: folderPath + "cafe002.png",
        Description: "Cafe Colombia"
    });
    //Cafe 3
    products.push({
        Path: folderPath + "cafe003.png",
        Description: "Cafe Peru"
    });
    //Cafe 4
    products.push({
        Path: folderPath + "cafe004.png",
        Description: "Cafe Colombia 2"
    });
    
    return products;
}