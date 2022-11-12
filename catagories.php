<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thiscordmerch Shop</title>
    <link rel="stylesheet" href="assets/css/NavBar.css">
    <link rel="stylesheet" href="assets/css/Home.css">
    <link rel="stylesheet" href="assets/css/catagories.css">
    <!--Import Bootstrap-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"></script>
    <!--Import Google Icon-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import Font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>

<body>
    <!-- ------------------SideNavBar--------------------- -->
    <ul id="SideNav" class="SideNav" style="width:0;">
        <li id="SideCategories">
            <nobr><a href="javascript:void(0)">Categories ▾</a></nobr>
            <ul class="sideDropdown" id="SideCategoriesDrop">
                <li><a href="catagories.php?Luktung=Luktung">Luktung</a></li>
                <li><a href="catagories.php?T-POP=T-POP">T-POP</a></li>
                <li><a href="catagories.php?K-POP=K-POP">K-POP</a></li>
                <li><a href="catagories.php?HIP-HOP=HIP-HOP">Hip hop</a></li>
                <li><a href="catagories.php?R%26B=R%26B">R&B</a></li>
                <li><a href="catagories.php?Jazz=Jazz">Jazz</a></li>
            </ul>
        </li>
        <li><a href="#">All</a></li>
        <li id="SideMore"><nobr><a href="javascript:void(0)">More ▾</a></nobr>
            <ul class="sideDropdown" id="SideMoreDrop">
                <li><a href="#">Credit</a></li>
            </ul>
        </li>
        <li><a href="login.html">Account</a></li>
        <li><a href="cart.html">Cart</a></li>
        <li><a href="javascript:closeNav()">Close</a></li>
    </ul>
    <!-- ---------------End--SideNavBar------------------- -->

    <div id="main">
        <!-- ------------------NavBar---------------------- -->
        <div style="background-color: lightgray;">
        <ul class="NavigationBar">
            <li id="Cart"><a href="cart.html">
                    <i class="material-icons">shopping_cart</i>
            <li id="Account"><a href="login.html">
                    <i class="material-icons">person</i>
                </a></li>
            <li id="More"><b><a href="javascript:void(0)">More ▾</a></b>
                <ul class="dropdown" id="moreDrop">
                    <li><a href="#">Credit</a></li>
                </ul>
            </li>
            <li id="ShopAll"><b><a href="#ShopAll">All</a></b></li>
            <li id="Categories"><b><a href="javascript:void(0)">Categories ▾</a></b>
                <ul class="dropdown" id="categoriesDrop">
                    <li><a href="catagories.php?Luktung=Luktung">Luktung</a></li>
                    <li><a href="catagories.php?T-POP=T-POP">T-POP</a></li>
                    <li><a href="catagories.php?K-POP=K-POP">K-POP</a></li>
                    <li><a href="catagories.php?HIP-HOP=HIP-HOP">Hip hop</a></li>
                    <li><a href="catagories.php?R%26B=R%26B">R&B</a></li>
                    <li><a href="catagories.php?Jazz=Jazz">Jazz</a></li>
                </ul>
            </li>
            <li id="Menu"><a href="javascript:void(0)" onclick="openNav()"><i class="material-icons">&#xe5d2;</i></a></li>
            <li id="Icon"><a href="index.html">Thiscordmerch</a></li>
        </ul>
        </div>
        <!-- ------------------End--NavBar----------------- -->

        <div class="CategoriesMain">
            <h2><b>Catagories</b></h2>
            <br>
            <div>
                <form class="catagoryForm" action="catagories.php" method="get">
                <div class="row mx-auto text-center">
                    <?php
                    if(isset($_GET['Luktung'])){
                        echo "<div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Luktung' value='Luktung' style='background-color:black;color:white;font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='T-POP' value='T-POP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='K-POP' value='K-POP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='HIP-HOP' value='HIP-HOP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='R&B' value='R&B' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Jazz' value='Jazz' style='font-size:20px;'></div>";}
                    else if(isset($_GET['T-POP'])){
                        echo "<div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Luktung' value='Luktung' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='T-POP' value='T-POP' style='background-color:black;color:white;font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='K-POP' value='K-POP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='HIP-HOP' value='HIP-HOP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='R&B' value='R&B' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Jazz' value='Jazz' style='font-size:20px;'></div>";}
                    else if(isset($_GET['K-POP'])){
                        echo "<div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Luktung' value='Luktung' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='T-POP' value='T-POP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='K-POP' value='K-POP' style='background-color:black;color:white;font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='HIP-HOP' value='HIP-HOP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='R&B' value='R&B' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Jazz' value='Jazz' style='font-size:20px;'></div>";}
                    else if(isset($_GET['HIP-HOP'])){
                        echo "<div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Luktung' value='Luktung' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='T-POP' value='T-POP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='K-POP' value='K-POP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='HIP-HOP' value='HIP-HOP' style='background-color:black;color:white;font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='R&B' value='R&B' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Jazz' value='Jazz' style='font-size:20px;'></div>";}
                    else if(isset($_GET['R&B'])){
                        echo "<div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Luktung' value='Luktung' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='T-POP' value='T-POP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='K-POP' value='K-POP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='HIP-HOP' value='HIP-HOP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='R&B' value='R&B' style='background-color:black;color:white;font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Jazz' value='Jazz' style='font-size:20px;'></div>";}
                    else if(isset($_GET['Jazz'])){
                        echo "<div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Luktung' value='Luktung' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='T-POP' value='T-POP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='K-POP' value='K-POP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='HIP-HOP' value='HIP-HOP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='R&B' value='R&B' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Jazz' value='Jazz' style='background-color:black;color:white;font-size:20px;'></div>";}
                    else{
                        echo "<div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Luktung' value='Luktung' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='T-POP' value='T-POP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='K-POP' value='K-POP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='HIP-HOP' value='HIP-HOP' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='R&B' value='R&B' style='font-size:20px;'></div>
                        <div class='catagory col-4 col-md-2'><input type='submit' class='catagoryMenu' name='Jazz' value='Jazz' style='font-size:20px;'></div>";}
                    ?>
                </div>
                </form>
                
                <div id="catagoryList">
                    <div class="row mx-auto text-center" style="margin:0 !important;">
                    <?php
                        if(isset($_GET['Luktung'])){Show($type="ลูกทุ่ง");}
                        else if(isset($_GET['T-POP'])){Show($type="T-POP");}
                        else if(isset($_GET['K-POP'])){Show($type="K-POP");}
                        else if(isset($_GET['HIP-HOP'])){Show($type="HIP-HOP");}
                        else if(isset($_GET['R&B'])){Show($type="RNB");}
                        else if(isset($_GET['Jazz'])){Show($type="Jazz");}

                        function Show($types)
                        {
                            $json = file_get_contents("data/products.json");
                            $datas = json_decode($json, true);
                            foreach($datas as $data){
                                foreach($data as $key => $value){
                                    if($key == "type"){$type = $value;}
                                    if($key == "name"){$name = $value;}
                                    if($key == "description"){$des = $value;}
                                    if($key == "image"){$image = $value;}

                                }
                                if($type == $types){
                                    $path = array($image, $name, $des);
                                    $path = json_encode($path);
                                    echo "<div class='card col-12 col-sm-6 col-md-4'>";
                                    echo "  <div class='card-body' style='height:85%;'>";
                                    echo "      <img class='card-img-top' src='$image' alt='$name' style='width:32vh;height:32vh;'>";
                                    echo "      <br><br><h4 class='card-title'>$name</h4>";
                                    echo "      <p class='card-text' style='overflow: hidden; text-overflow: ellipsis;'>$des</p>";
                                    echo "  </div>";
                                    echo "  <div class='card-body' style='height:15%;'>";
                                    echo "      <a href='product.html' onclick='fromCatago($path)' class='btn btn-primary' style='width:100%;'>Product</a>";
                                    echo "  </div>";
                                    echo "</div>";
                                }
                            }
                        }
                    ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/js/product.js"></script>
    <script src="assets/js/Home.js"></script>
    <script src="assets/js/NavBar.js"></script>
</body>
</html>