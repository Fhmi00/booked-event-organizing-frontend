import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SideMenu from "../../components/ProfileCard/sideDropdown";
import CardEditProfile from "../../components/ProfileCard/cardEditProfile";

function EditProfile() {
  return (
    <>
      <Header></Header>
      <div className="container-fluid">
        <div className="row">
          <SideMenu></SideMenu>
          <CardEditProfile></CardEditProfile>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default EditProfile;
