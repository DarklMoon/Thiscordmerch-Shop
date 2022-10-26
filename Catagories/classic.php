<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thiscordmerch Shop</title>
    <link rel="stylesheet" href="../assets/css/NavBar.css">
    <link rel="stylesheet" href="../assets/css/Home.css">
    <link rel="stylesheet" href="../assets/css/catagories.css">
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
                <li><a href="classic.php">Classic</a></li>
                <li><a href="country.html">Country</a></li>
                <li><a href="jazz.html">Jazz</a></li>
                <li><a href="rb.html">R&B</a></li>
                <li><a href="pop.html">Pop</a></li>
            </ul>
        </li>
        <li><a href="#">All</a></li>
        <li id="SideMore"><nobr><a href="javascript:void(0)">More ▾</a></nobr>
            <ul class="sideDropdown" id="SideMoreDrop">
                <li><a href="#">Credit</a></li>
            </ul>
        </li>
        <li><a href="#">Account</a></li>
        <li><a href="../cart.html">Cart</a></li>
        <li><a href="javascript:closeNav()">Close</a></li>
    </ul>
    <!-- ---------------End--SideNavBar------------------- -->

    <div id="main">
        <!-- ------------------NavBar---------------------- -->
        <div style="background-color: lightgray;">
        <ul class="NavigationBar">
            <li id="Cart"><a href="../cart.html">
                    <i class="material-icons">shopping_cart</i>
            <li id="Account"><a href="#">
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
                    <li><a href="classic.php">Classic</a></li>
                    <li><a href="country.html">Country</a></li>
                    <li><a href="jazz.html">Jazz</a></li>
                    <li><a href="rb.html">R&B</a></li>
                    <li><a href="pop.html">Pop</a></li>
                </ul>
            </li>
            <li id="Menu"><a href="javascript:void(0)" onclick="openNav()"><i class="material-icons">&#xe5d2;</i></a></li>
            <li id="Icon"><a href="../index.html">Thiscordmerch</a></li>
        </ul>
        </div>
        <!-- ------------------End--NavBar----------------- -->

        <div class="CategoriesMain">
            <h2>Catagories</h2>
            <br>
            <div>
                <form class="catagoryForm" action="classic.php" method="post">
                <div class="row mx-auto text-center">
                    <div class="catagory col-4 col-md-2"><input type="submit" class="catagoryMenu" name="ลูกทุ่ง" value="ลูกทุ่ง"></div>
                    <div class="catagory col-4 col-md-2"><input type="submit" class="catagoryMenu" name="T-POP" value="T-POP"></div>
                    <div class="catagory col-4 col-md-2"><input type="submit" class="catagoryMenu" name="K-POP" value="K-POP"></div>
                    <div class="catagory col-4 col-md-2"><input type="submit" class="catagoryMenu" name="Hiphop" value="Hip hop"></div>
                    <div class="catagory col-4 col-md-2"><input type="submit" class="catagoryMenu" name="R&B" value="R&B"></div>
                    <div class="catagory col-4 col-md-2"><input type="submit" class="catagoryMenu" name="Jazz" value="Jazz"></div>
                </div>
                </form>
                
                <div class="catagoryList" style="width:100%;">
                <?php
                    if(isset($_POST['ลูกทุ่ง'])){Show($type="ลูกทุ่ง");}
                    else if(isset($_POST['T-POP'])){Show($type="T-POP");}
                    else if(isset($_POST['K-POP'])){Show($type="K-POP");}
                    else if(isset($_POST['Hiphop'])){Show($type="HIP-HOP");}
                    else if(isset($_POST['R&B'])){Show($type="RNB");}
                    else if(isset($_POST['Jazz'])){Show($type="Jazz");}

                    function Show($type)
                    {
                        echo $type;
                    }
                ?>
                <div>
            </div>
        </div>
    </div>
    
    <script src="../assets/js/Home.js"></script>
    <script src="../assets/js/NavBar.js"></script>
</body>
</html>