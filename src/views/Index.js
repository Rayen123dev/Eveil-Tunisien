/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
return (
<>
  <IndexNavbar fixed />
  <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
    <div className="container mx-auto items-center flex flex-wrap">
      <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
        <div className="pt-32 sm:pt-0">
          <h2 className="font-semibold text-4xl text-blueGray-600">
            Eveil Tunisien : Ensemble pour une Tunisie Meilleure
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
            Éveil Tunisien incarne un mouvement de renouveau, visant à stimuler l'innovation et à promouvoir des
            réformes profondes dans les secteurs économiques, éducatifs, sociaux et environnementaux. en collaboration
            avec des acteurs locaux pour une Tunisie plus
            juste et durable.
          </p>

        </div>
      </div>
    </div>

    <img className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
      src="logopro-removebg-preview.png" alt="..." />
  </section>




  <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
    <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20" style={{ transform: "translateZ(0)"
      }}>
      <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon className="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-6/12 px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">
                    Réforme economique
                  </h6>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-book"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">
                    Réforme l'éducation
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">
                    Réforme du systéme de santé
                  </h6>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-users"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">
                    Réforme sociale
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12 px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">
                    Dévloppement durable et environnement
                  </h6>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-gavel"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">
                    Réforme de l'administration publique et lutte contre la corruption
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">
                    Réforme du secteur technologique et de l'innovation
                  </h6>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-tractor"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">
                    Réforme du secteur agricole
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className="container mx-auto overflow-hidden pb-20">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Objectifs de développement durable (ODD)
          </h3>
          <div className="block pb-6">
            <center>
              <span
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                ODD 9
              </span>
              <span
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                ODD 8
              </span>
              <span
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                ODD 4
              </span>
              <span
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                ODD 3
              </span>
              <span
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                ODD 10
              </span>
              <span
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                ODD 1
              </span>
              <span
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                ODD 13
              </span>
              <span
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                ODD 15
              </span>
              <span
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                ODD 16
              </span>
              <span
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                ODD 2
              </span>
              <span
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                ODD 12
              </span>
            </center>
          </div>
        </div>

        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
          <div>
            <center>
              <img alt="..." src="odd.png" />
            </center>
          </div>
        </div>

      </div>

      <div className="flex flex-wrap items-center pt-32">
        <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
          <center>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Notre mombre
            </h3>
          </center>
          <div className="justify-center flex flex-wrap relative">
            <div className="my-4 w-full lg:w-6/12 px-4">
              <a>
                <div className="bg-600 shadow-lg rounded-lg">
                  <center><img alt="..." src="may.png" height="150" width="150" /><span
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      May Youssef
                      <p>Presidente</p>
                    </span></center>
                </div>
              </a>
              <a>
                <div className="bg-500 shadow-lg rounded-lg">
                  <center><img alt="..." src="rayen.png" height="150" width="150" />
                    <span
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Rayen Ben Massaoud
                      <p>Vise-President</p>
                    </span>
                  </center>

                </div>
              </a>
              <a>
                <div className="bg-700 shadow-lg rounded-lg">
                  <center><img alt="..." src="mayssa.png" height="150" width="150" /><span
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Mayssa Ben Joud
                      <p>Secrétaire géneral</p>
                    </span></center>
                </div>
              </a>
            </div>
            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
              <a>
                <div className="bg-600 shadow-lg rounded-lg">
                  <center><img alt="..." src="ameny.png" height="150" width="150" /><span
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Ameny Ben Naceur
                      <p>Conseiller Social et Environnemental</p>
                    </span></center>
                </div>
              </a>
              <a>
                <div className="bg-500 shadow-lg rounded-lg">
                  <center><img alt="..." src="foued.png" height="150" width="150" /><span
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Foued Ben Rhaiem
                      <p>Trésorier</p>
                    </span></center>
                </div>
              </a>
              <a>
                <div className="bg-700 shadow-lg rounded-lg">
                  <center><img alt="..." src="amer.png" height="150" width="150" /><span
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Amer Dhouibi
                      <p>Conseiller Économique</p>
                    </span></center>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 pb-32 pt-48">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
          <div className="md:pr-12">
            <div
              className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-file-alt text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold">
              Documentation
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
            <h2>Réforme économique :</h2>
            <p>
              Explication : "Nous soutenons la croissance des petites et moyennes entreprises (PME) à travers des
              formations et des financements. Notre objectif est d'attirer des investissements étrangers et d'encourager
              l'innovation dans des secteurs stratégiques comme l'agriculture et les technologies numériques."
            </p>
            <h2>Réforme sociale :</h2>
            <p>

              Explication : "Nos initiatives sociales visent à réduire les inégalités en renforçant les programmes
              d'aide sociale pour les familles vulnérables, tout en créant des opportunités d'emploi et d'inclusion pour
              les jeunes et les femmes."
            </p>
            <h2>Réforme de la santé :</h2>
            <p>
              Explication : "Nous plaidons pour un accès universel aux soins de santé de qualité en améliorant les
              infrastructures médicales, notamment dans les zones rurales, et en renforçant les services de santé
              préventive."
            </p>
            <h2>Réforme éducative :</h2>

            <p>
              Explication : "Nous travaillons à moderniser le système éducatif tunisien, en intégrant l'enseignement des
              compétences numériques et des technologies émergentes dès le primaire. Nous voulons former les leaders de
              demain."
            </p>
            <h2>Réforme environnementale et énergétique :</h2>

            <p>
              Explication : "Nous prônons la transition vers des énergies renouvelables, avec des projets pilotes dans
              les énergies solaires et éoliennes. Nos initiatives visent à protéger l'environnement tout en réduisant la
              dépendance aux énergies fossiles."
            </p>
            </p>
          </div>
        </div>

        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
          <img alt="..." className="max-w-full rounded-lg shadow-xl" style={{
            transform: "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)" , }} src="affi.png" />
        </div>
      </div>
    </div>

    <div className="justify-center text-center flex flex-wrap mt-24">
      <div className="w-full md:w-6/12 px-12 md:px-4">
        <h2 className="font-semibold text-4xl"> Observation a notre objectifs </h2>
      </div>
    </div>
  </section>

  <section className="block relative z-1 bg-blueGray-600">
    <div className="container mx-auto">
      <div className="justify-center flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4  -mt-24">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 px-4">
              <h5 className="text-xl font-semibold pb-4 text-center">
                agricole
              </h5>
              <Link to="/auth/login">
              <div
                className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <img alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="ag.png" />
              </div>
              </Link>
            </div>

            <div className="w-full lg:w-4/12 px-4">
              <h5 className="text-xl font-semibold pb-4 text-center">
                technologique et de l'innovation
              </h5>
              <Link to="/profile">
              <div
                className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <img alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="tech.jpeg" />
              </div>
              </Link>
            </div>

            <div className="w-full lg:w-4/12 px-4">
              <h5 className="text-xl font-semibold pb-4 text-center">
                economique
              </h5>
              <Link to="/landing">
              <div
                className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <img alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="eco.jpeg" />
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <Footer />
</>
);
}