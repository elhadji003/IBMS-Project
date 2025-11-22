import React from "react";
import { Link } from "react-router-dom";

export default function Acceuil() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center px-12 py-10 bg-sky-500 text-white mb-6">
        Bienvenue sur la plateforme IBMS-Learning
      </h1>

      <div className="flex justify-around items-center max-sm:flex-col gap-4">
        <div className="bg-gray-100 rounded-md shadow-md p-4 max-w-md text-center">
          <h2 className="font-semibold text-lg mb-2">Votre espace étudiant</h2>
          <p className="text-gray-700">
            Accédez à vos cours, vos ressources pédagogiques, vos bulletins,
            votre historique de paiements et bien plus. Tout est centralisé pour
            vous aider à progresser sereinement.
          </p>
        </div>

        <div className="bg-gray-100 rounded-md shadow-md p-4 max-w-md text-center">
          <h2 className="font-semibold text-lg mb-2">
            Un apprentissage simplifié
          </h2>
          <p className="text-gray-700">
            IBMS-Learning vous accompagne au quotidien : notifications,
            présence, documents administratifs, suivi des notes… tout ce qu’il
            faut pour vous organiser et avancer efficacement.
          </p>
        </div>
      </div>
    </div>
  );
}
