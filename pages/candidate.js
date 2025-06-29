import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
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
import Preview from "../Components/Global/Preview";
import UploadImg from "../Components/Global/UploadImg";
import PreviewImg from "../Components/Global/PreviewImg";
import Loader from "../Components/Global/Loader";
import PopUp from "../Components/Global/PopUp";

//IMPORTING CONTRCT DATA
import { VOTING_DAPP_CONTEXT } from "../context/context";

const signup = () => {
  const {
    notifySuccess,
    notifyError,
    setLoader,
    loader,
    VOTING_DAPP,
    REGISTER_CANDIDATE,
    GET_SINGLE_CANDIDATE,
    checkIfWalletIsConnected,
  } = useContext(VOTING_DAPP_CONTEXT);

  //CURRENT ADDRESS
  const [currentAddress, setCurrentAddress] = useState();
  const zeroAddress = "0x0000000000000000000000000000000000000000";
  const [candidate, setCandidate] = useState();

  //FILES
  const [pdf, setPdf] = useState(null);
  const [image, setImage] = useState(null);

  //CANDIDATE DETAIL
  const [updateCandidate, setUpdateCandidate] = useState({
    _name: "",
    _nominationForm: "",
    _affidavit: "",
    _criminalAntecedents: "",
    _assetsAndLiabilities: "",
    _educationalQualifications: "",
    _electoralRollEntry: "",
    _securityDeposit: "",
    _partyAffiliation: "",
    _oathOrAffirmation: "",
    _photographs: "",
    _proofOfAge: "",
    _proofOfAddress: "",
    _panCardDetails: "",
    _voterIdCardDetails: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const address = await checkIfWalletIsConnected();
      if (address) {
        setCurrentAddress(address);
        const items = await GET_SINGLE_CANDIDATE(address);
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
            <div class="col-12 col-md-6 col-lg-5 col-xxl-5 offset-xxl-1 text-center ms-xl-auto">
              <div class="sign__content ms-md-5 ms-xxl-0 pt-120 pb-120">
                <div class="head_part">
                  <a href="/">
                    {" "}
                    <img src="assets/images/logo.png" alt="Logo" />
                  </a>
                  <h5 class="mt-5 mt-lg-6">Register as a candidate</h5>
                </div>
                {candidate?.address == zeroAddress && (
                  <div
                    autocomplete="off"
                    id="frmContactus"
                    class="contact__form mt-8 mt-lg-10  text-start"
                  >
                    <div class="d-flex flex-column gap-5 gap-lg-6 ">
                      <div class="row g-5 g-lg-6">
                        <div class="col-sm-6 col-md-12 col-xl-6">
                          <Input
                            name={"Enter name:"}
                            placeholder={"name"}
                            type={"text"}
                            handleClick={(e) =>
                              setUpdateCandidate({
                                ...updateCandidate,
                                _name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div class="col-sm-6 col-md-12 col-xl-6">
                          <Input
                            name={"Enter your Date of Birth"}
                            placeholder={"dob"}
                            type={"text"}
                            handleClick={(e) =>
                              setUpdateCandidate({
                                ...updateCandidate,
                                _nominationForm: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <Input
                        name={"Enter nomination form document number in the PDF"}
                        placeholder={"nomination form"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _affidavit: e.target.value,
                          })
                        }
                      />

                      <Input
                         name={"Enter affidavit document number in the PDF"}
                         placeholder={"affidavit"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _criminalAntecedents: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Enter your address details"}
                        placeholder={"address details"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _assetsAndLiabilities: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Educational Qualifications"}
                        placeholder={"education"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _educationalQualifications: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Electoral Roll Entry"}
                        placeholder={"electoral roll entry"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _electoralRollEntry: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Role:"}
                        placeholder={"role"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _securityDeposit: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Party name:"}
                        placeholder={"party name"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _partyAffiliation: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Enter your Pan card number"}
                        placeholder={"pan card number"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _oathOrAffirmation: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Photographs"}
                        placeholder={"photographs"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _photographs: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Proof of age document number:"}
                        placeholder={"proofOfAge"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _proofOfAge: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"ProofOfAddress document number"}
                        placeholder={"proofOfAddress"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _proofOfAddress: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Enter your Adhaar number"}
                        placeholder={"adhaar number"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _panCardDetails: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Voter Id Card Details:"}
                        placeholder={"voterIdCardDetails"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _voterIdCardDetails: e.target.value,
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
                    <label class="checkbox-single d-flex align-items-center nw1-color mt-3">
                      <span class="checkbox-area d-center">
                        <input type="checkbox" />
                        <span class="checkmark d-center"></span>
                      </span>
                      I accept the privacy policy
                    </label>
                    <div class=" mt-7 mt-lg-8">
                      <button
                        onClick={() =>
                          REGISTER_CANDIDATE(updateCandidate, image, pdf)
                        }
                        class="cmn-btn py-3 px-5 px-lg-6 mt-7 mt-lg-8 w-100 d-center"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>{" "}
        {candidate?.address != zeroAddress && <PopUp candidate={candidate} />}
        {loader && <Loader />}
      </section>
    </>
  );
};

export default signup;
