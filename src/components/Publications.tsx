import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  doi: string;
  pdfUrl: string;
  tags: string[];
}

const publications: Publication[] = [
  {
    id: '1',
    title: 'Clinical pharmacist intervention in Appendectomy - Dexmedetomidine as an adjunct therapy',
    authors: [
      'Bushra Abdel-Hadi',
      'Sami Abdel-Fattah'
      
    ],
    journal: ' JAPER journal',
    year: 2022,
    abstract: 'This research was performed by a clinical pharmacist to determine the efficacy of dexmedetomidine as an alternative therapy in laparoscopic appendectomy surgery for acute and short-lived analgesic appendicitis and to focus on the consistency of pharmacotherapy and patient safety. A randomized, double-blind, prospective analysis of 2 groups allocated to the fentanyl [GF] and fentanyl dexmedetomidine [GF-D] groups. Propofol, Sevoflurane, Atracurium, and intraoperative fentanyl bolus were administered to the patient, followed by an infusion of maintenance dose of 0.2 μg/kg/h for the two grades. GF patients were given placebo, however, while patients with GF-D received both dexmedetomidine and fentanyl as an infusion (0.5 μg/kg/h).The requirements for postoperative analgesics and the need for initial postoperative analgesics, consistency of hemodynamic parameters, side effects of nausea and vomiting, and food tolerance have been controlled. GF-D showed lower side effects and food resistance compared to GF: pain score, morphine consumption, nausea, and vomiting (p<0.05), When GF was compared to GF-D, the period for the first postoperative morphine was shorter in GF (p<0.05). The addition of dexmedetomidine to appendectomy surgery is strongly recommended; clinical pharmacist involvement has improved patient safety and avoids any adverse drug reaction.',

    doi: '10.51847/AYOZXtLMrj',
    pdfUrl: 'https://japer.in/storage/files/article/c9aba0e1-fc21-4634-9691-c12d40541e2f-1Ynbuv2HfUStPhvv/japer-vol-12-iss-2-1-5-7046.pdf',
    tags: ['Data Analysis', 'Time Series Analysis', 'Medical paper']
  },
  
];

export function Publications() {
  return (
    <section className="py-16 bg-gray-50" id="publications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Publications</h2>
        
        <div className="grid gap-8">
          {publications.map((pub) => (
            <div key={pub.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pub.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3">
                    {pub.authors.join(', ')}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="font-medium">{pub.journal}</span>
                    <span className="mx-2">•</span>
                    <span>{pub.year}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Abstract</h4>
                    <p className="text-gray-600">{pub.abstract}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink size={16} />
                      View on Publisher's Site
                    </a>
                    <a
                      href={pub.pdfUrl}
                      download
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <Download size={16} />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}