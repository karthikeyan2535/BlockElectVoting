import React, { useEffect, useState, useContext } from "react";

import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  RoadMap,
} from "../Components/index";

import Input from "../Components/Global/Input";
import Upload from "../Components/Global/Upload";
import UploadImg from "../Components/Global/UploadImg";
import Preview from "../Components/Global/Preview";
import PreviewImg from "../Components/Global/PreviewImg";
import Loader from "../Components/Global/Loader";
import PopUp from "../Components/Global/PopUp";

//IMPORTING CONTRCT DATA
import { VOTING_DAPP_CONTEXT } from "../context/context";

const voter = () => {
  const {
    notifySuccess,
    notifyError,
    setLoader,
    loader,
    VOTING_DAPP,
    checkIfWalletIsConnected,
    REGISTER_VOTER,
    GET_SINGLE_VOTER,
  } = useContext(VOTING_DAPP_CONTEXT);

  //VOTER ADDRESS
  const [currentAddress, setCurrentAddress] = useState();
  const zeroAddress = "0x0000000000000000000000000000000000000000";
  const [candidate, setCandidate] = useState();

  //FILES
  const [pdf, setPdf] = useState(null);
  const [image, setImage] = useState(null);

  //VOTER DETAIL
  const [updateVoter, setUpdateVoter] = useState({
    _name: "",
    _voterAddress: "",
    _photograph: "",
    _parentOrSpouseName: "",
    _gender: "",
    _dobOrAge: "",
    _addressDetails: "",
    _epicNumber: "",
    _partNumberAndName: "",
    _assemblyConstituencyNumberAndName: "",
    _issuingAuthoritySignature: "",
    _hologramAndBarcode: "",
  });
  //
  useEffect(() => {
    const fetchData = async () => {
      const address = await checkIfWalletIsConnected();
      if (address) {
        setCurrentAddress(address);
        const items = await GET_SINGLE_VOTER(address);
        setCandidate(items);
        console.log(items);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />

      <section class="sign nb4-bg h-100 d-flex align-items-center position-relative z-0">
        <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
          <img
            src="assets/images/star.png"
            alt="vector"
            class="position-absolute push_animat"
          />
        </div>
        <div class="container ">
          <div class="row align-items-center justify-content-center justify-content-xl-start">
            <div class="col-12 col-sm-10 col-md-6">
              <div class="welcome alt-color text-center text-md-start pt-120 pb-120 position-relative z-0">
                <h1 class="display-one">Welcome Back!</h1>
                {image && <PreviewImg image={image} />}
                {pdf && <Preview pdf={pdf} />}
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5 col-xxl-5 offset-xxl-1 text-center ms-xl-auto mx-auto">
              <div class="sign__content ms-md-5 ms-xxl-0 pt-120 pb-120">
                <div class="head_part">
                  <a href="/">
                    {" "}
                    <img src="assets/images/logo.png" alt="Logo" />
                  </a>
                  <h5 class="mt-5 mt-lg-6">Register as a voter </h5>
                </div>

                {candidate?.address == zeroAddress && (
                  <div
                    autocomplete="off"
                    id="frmContactus"
                    class="contact__form mt-8 mt-lg-10 text-start"
                  >
                    <div class="d-flex flex-column gap-5 gap-lg-6 ">
                      <Input
                        name={"Enter name:"}
                        placeholder={"name"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateVoter({
                            ...updateVoter,
                            _name: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Enter Voter Address:"}
                        placeholder={"voter address"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateVoter({
                            ...updateVoter,
                            _voterAddress: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Enter the Photograph page number in the PDF:"}
                        placeholder={"photograph"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateVoter({
                            ...updateVoter,
                            _photograph: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Enter your Parents name:"}
                        placeholder={"parents name"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateVoter({
                            ...updateVoter,
                            _parentOrSpouseName: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Enter your Gender"}
                        placeholder={"gender"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateVoter({
                            ...updateVoter,
                            _gender: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Enter your Date of Birth"}
                        placeholder={"dob"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateVoter({
                            ...updateVoter,
                            _dobOrAge: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Enter your address details"}
                        placeholder={"address details"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateVoter({
                            ...updateVoter,
                            _addressDetails: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Enter your Adhaar number"}
                        placeholder={"adhaar number"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateVoter({
                            ...updateVoter,
                            _epicNumber: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Enter your Nationality"}
                        placeholder={"nationality"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateVoter({
                            ...updateVoter,
                            _partNumberAndName: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Enter your Pan card number"}
                        placeholder={"pan card number"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateVoter({
                            ...updateVoter,
                            _assemblyConstituencyNumberAndName: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Issuing Authority Signature page number in pdf"}
                        placeholder={"issuing authority signature"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateVoter({
                            ...updateVoter,
                            _issuingAuthoritySignature: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Constituency number"}
                        placeholder={"constituency"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateVoter({
                            ...updateVoter,
                            _hologramAndBarcode: e.target.value,
                          })
                        }
                      />
                      <UploadImg
                        setLoader={setLoader}
                        notifySuccess={notifySuccess}
                        notifyError={notifyError}
                        setImage={setImage}
                      />
                      <Upload
                        setLoader={setLoader}
                        notifySuccess={notifySuccess}
                        notifyError={notifyError}
                        setPdf={setPdf}
                      />
                    </div>

                    <div class=" mt-7 mt-lg-8">
                      <button
                        class="cmn-btn py-3 px-5 px-lg-6 mt-7 mt-lg-8 w-100 d-center"
                        onClick={() => REGISTER_VOTER(updateVoter, image, pdf)}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                )}

                <div class="mt-8 mt-lg-10">
                  <p>
                    Don’t have an account? <a href="/">Register Here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {candidate?.address != zeroAddress && <PopUp candidate={candidate} />}
        {loader && <Loader />}
      </section>
    </>
  );
};

export default voter;
