import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Proclist from 'App/Models/Proclist'

export default class ProclistSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Proclist.createMany(
      [
        {
         "code": "00.01",
         "name": "Therapeutic ultrasound of vessels of head and neck"
        },
        {
         "code": "00.02",
         "name": "Therapeutic ultrasound of heart"
        },
        {
         "code": "00.03",
         "name": "Therapeutic ultrasound of peripheral vascular vessels"
        },
        {
         "code": "00.09",
         "name": "Other therapeutic ultrasound"
        },
        {
         "code": "00.10",
         "name": "Implantation of chemotherapeutic agent"
        },
        {
         "code": "00.11",
         "name": "Infusion of drotrecogin alfa (activated)"
        },
        {
         "code": "00.12",
         "name": "Administration of inhaled nitric oxide"
        },
        {
         "code": "00.13",
         "name": "Injection or infusion of nesiritide"
        },
        {
         "code": "00.14",
         "name": "Injection or infusion of oxazolidinone class of antibiotics"
        },
        {
         "code": "00.15",
         "name": "High-dose infusion interleukin-2 [IL-2]"
        },
        {
         "code": "00.16",
         "name": "Pressurized treatment of venous bypass graft [conduit] with pharmaceutical substance"
        },
        {
         "code": "00.17",
         "name": "Infusion of vasopressor agent"
        },
        {
         "code": "00.18",
         "name": "Infusion of immunosuppressive antibody therapy"
        },
        {
         "code": "00.19",
         "name": "Disruption of blood brain barrier via infusion [BBBD]"
        },
        {
         "code": "00.21",
         "name": "Intravascular imaging of extracranial cerebral vessels"
        },
        {
         "code": "00.22",
         "name": "Intravascular imaging of intrathoracic vessels"
        },
        {
         "code": "00.23",
         "name": "Intravascular imaging of peripheral vessels"
        },
        {
         "code": "00.24",
         "name": "Intravascular imaging of coronary vessels"
        },
        {
         "code": "00.25",
         "name": "Intravascular imaging of renal vessels"
        },
        {
         "code": "00.28",
         "name": "Intravascular imaging, other specified vessel(s)"
        },
        {
         "code": "00.29",
         "name": "Intravascular imaging, unspecified vessel(s)"
        },
        {
         "code": "00.31",
         "name": "Computer assisted surgery with CT\/CTA"
        },
        {
         "code": "00.32",
         "name": "Computer assisted surgery with MR\/MRA"
        },
        {
         "code": "00.33",
         "name": "Computer assisted surgery with fluoroscopy"
        },
        {
         "code": "00.34",
         "name": "Imageless computer assisted surgery"
        },
        {
         "code": "00.35",
         "name": "Computer assisted surgery with multiple datasets"
        },
        {
         "code": "00.39",
         "name": "Other computer assisted surgery"
        },
        {
         "code": "00.40",
         "name": "Procedure on single vessel"
        },
        {
         "code": "00.41",
         "name": "Procedure on two vessels"
        },
        {
         "code": "00.42",
         "name": "Procedure on three vessels"
        },
        {
         "code": "00.43",
         "name": "Procedure on four or more vessels"
        },
        {
         "code": "00.44",
         "name": "Procedure on vessel bifurcation"
        },
        {
         "code": "00.45",
         "name": "Insertion of one vascular stent"
        },
        {
         "code": "00.46",
         "name": "Insertion of two vascular stents"
        },
        {
         "code": "00.47",
         "name": "Insertion of three vascular stents"
        },
        {
         "code": "00.48",
         "name": "Insertion of four or more vascular stents"
        },
        {
         "code": "00.49",
         "name": "Supersaturated oxygen therapy"
        },
        {
         "code": "00.50",
         "name": "Implantation of cardiac resynchronization pacemaker without mention of defibrillation, total system [CRT-P]"
        },
        {
         "code": "00.51",
         "name": "Implantation of cardiac resynchronization defibrillator, total system [CRT-D]"
        },
        {
         "code": "00.52",
         "name": "Implantation or replacement of transvenous lead [electrode] into left ventricular coronary venous system"
        },
        {
         "code": "00.53",
         "name": "Implantation or replacement of cardiac resynchronization pacemaker pulse generator only [CRT-P]"
        },
        {
         "code": "00.54",
         "name": "Implantation or replacement of cardiac resynchronization defibrillator pulse generator only [CRT-D]"
        },
        {
         "code": "00.55",
         "name": "Insertion of drug-eluting stent(s) of other peripheral vessel(s)"
        },
        {
         "code": "00.56",
         "name": "Insertion or replacement of implantable pressure sensor (lead) for intracardiac or great vessel hemodynamic monitoring"
        },
        {
         "code": "00.57",
         "name": "Implantation or replacement of subcutaneous device for intracardiac or great vessel hemodynamic monitoring"
        },
        {
         "code": "00.58",
         "name": "Insertion of intra-aneurysm sac pressure monitoring device (intraoperative)"
        },
        {
         "code": "00.59",
         "name": "Intravascular pressure measurement of coronary arteries"
        },
        {
         "code": "00.60",
         "name": "Insertion of drug-eluting stent(s) of superficial femoral artery"
        },
        {
         "code": "00.61",
         "name": "Percutaneous angioplasty or atherectomy of precerebral (extracranial) vessel(s)"
        },
        {
         "code": "00.62",
         "name": "Percutaneous angioplasty or atherectomy of intracranial vessel(s)"
        },
        {
         "code": "00.63",
         "name": "Percutaneous insertion of carotid artery stent(s)"
        },
        {
         "code": "00.64",
         "name": "Percutaneous insertion of other precerebral (extracranial) artery stent(s)"
        },
        {
         "code": "00.65",
         "name": "Percutaneous insertion of intracranial vascular stent(s)"
        },
        {
         "code": "00.66",
         "name": "Percutaneous transluminal coronary angioplasty [PTCA] or coronary atherectomy"
        },
        {
         "code": "00.67",
         "name": "Intravascular pressure measurement of intrathoracic arteries"
        },
        {
         "code": "00.68",
         "name": "Intravascular pressure measurement of peripheral arteries"
        },
        {
         "code": "00.69",
         "name": "Intravascular pressure measurement, other specified and unspecified vessels"
        },
        {
         "code": "00.70",
         "name": "Revision of hip replacement, both acetabular and femoral components"
        },
        {
         "code": "00.71",
         "name": "Revision of hip replacement, acetabular component"
        },
        {
         "code": "00.72",
         "name": "Revision of hip replacement, femoral component"
        },
        {
         "code": "00.73",
         "name": "Revision of hip replacement, acetabular liner and\/or femoral head only"
        },
        {
         "code": "00.74",
         "name": "Hip bearing surface, metal-on-polyethylene"
        },
        {
         "code": "00.75",
         "name": "Hip bearing surface, metal-on-metal"
        },
        {
         "code": "00.76",
         "name": "Hip bearing surface, ceramic-on-ceramic"
        },
        {
         "code": "00.77",
         "name": "Hip bearing surface, ceramic-on-polyethylene"
        },
        {
         "code": "00.80",
         "name": "Revision of knee replacement, total (all components)"
        },
        {
         "code": "00.81",
         "name": "Revision of knee replacement, tibial component"
        },
        {
         "code": "00.82",
         "name": "Revision of knee replacement, femoral component"
        },
        {
         "code": "00.83",
         "name": "Revision of knee replacement, patellar component"
        },
        {
         "code": "00.84",
         "name": "Revision of total knee replacement, tibial insert (liner)"
        },
        {
         "code": "00.85",
         "name": "Resurfacing hip, total, acetabulum and femoral head"
        },
        {
         "code": "00.86",
         "name": "Resurfacing hip, partial, femoral head"
        },
        {
         "code": "00.87",
         "name": "Resurfacing hip, partial, acetabulum"
        },
        {
         "code": "00.91",
         "name": "Transplant from live related donor"
        },
        {
         "code": "00.92",
         "name": "Transplant from live non-related donor"
        },
        {
         "code": "00.93",
         "name": "Transplant from cadaver"
        },
        {
         "code": "00.94",
         "name": "Intra-operative neurophysiologic monitoring"
        },
        {
         "code": "01.01",
         "name": "Cisternal puncture"
        },
        {
         "code": "01.02",
         "name": "Ventriculopuncture through previously implanted catheter"
        },
        {
         "code": "01.09",
         "name": "Other cranial puncture"
        },
        {
         "code": "01.10",
         "name": "Intracranial pressure monitoring"
        },
        {
         "code": "01.11",
         "name": "Closed [percutaneous] [needle] biopsy of cerebral meninges"
        },
        {
         "code": "01.12",
         "name": "Open biopsy of cerebral meninges"
        },
        {
         "code": "01.13",
         "name": "Closed [percutaneous] [needle] biopsy of brain"
        },
        {
         "code": "01.14",
         "name": "Open biopsy of brain"
        },
        {
         "code": "01.15",
         "name": "Biopsy of skull"
        },
        {
         "code": "01.16",
         "name": "Intracranial oxygen monitoring"
        },
        {
         "code": "01.17",
         "name": "Brain temperature monitoring"
        },
        {
         "code": "01.18",
         "name": "Other diagnostic procedures on brain and cerebral meninges"
        },
        {
         "code": "01.19",
         "name": "Other diagnostic procedures on skull"
        },
        {
         "code": "01.20",
         "name": "Cranial implantation or replacement of neurostimulator pulse generator"
        },
        {
         "code": "01.21",
         "name": "Incision and drainage of cranial sinus"
        },
        {
         "code": "01.22",
         "name": "Removal of intracranial neurostimulator lead(s)"
        },
        {
         "code": "01.23",
         "name": "Reopening of craniotomy site"
        },
        {
         "code": "01.24",
         "name": "Other craniotomy"
        },
        {
         "code": "01.25",
         "name": "Other craniectomy"
        },
        {
         "code": "01.26",
         "name": "Insertion of catheter(s) into cranial cavity or tissue"
        },
        {
         "code": "01.27",
         "name": "Removal of catheter(s) from cranial cavity or tissue"
        },
        {
         "code": "01.28",
         "name": "Placement of intracerebral catheter(s) via burr hole(s)"
        },
        {
         "code": "01.29",
         "name": "Removal of cranial neurostimulator pulse generator"
        },
        {
         "code": "01.31",
         "name": "Incision of cerebral meninges"
        },
        {
         "code": "01.32",
         "name": "Lobotomy and tractotomy"
        },
        {
         "code": "01.39",
         "name": "Other incision of brain"
        },
        {
         "code": "01.41",
         "name": "Operations on thalamus"
        },
        {
         "code": "01.42",
         "name": "Operations on globus pallidus"
        },
        {
         "code": "01.51",
         "name": "Excision of lesion or tissue of cerebral meninges"
        },
        {
         "code": "01.52",
         "name": "Hemispherectomy"
        },
        {
         "code": "01.53",
         "name": "Lobectomy of brain"
        },
        {
         "code": "01.59",
         "name": "Other excision or destruction of lesion or tissue of brain"
        },
        {
         "code": "01.6",
         "name": "Excision of lesion of skull"
        },
        {
         "code": "02.01",
         "name": "Opening of cranial suture"
        },
        {
         "code": "02.02",
         "name": "Elevation of skull fracture fragments"
        },
        {
         "code": "02.03",
         "name": "Formation of cranial bone flap"
        },
        {
         "code": "02.04",
         "name": "Bone graft to skull"
        },
        {
         "code": "02.05",
         "name": "Insertion of skull plate"
        },
        {
         "code": "02.06",
         "name": "Other cranial osteoplasty"
        },
        {
         "code": "02.07",
         "name": "Removal of skull plate"
        },
        {
         "code": "02.11",
         "name": "Simple suture of dura mater of brain"
        },
        {
         "code": "02.12",
         "name": "Other repair of cerebral meninges"
        },
        {
         "code": "02.13",
         "name": "Ligation of meningeal vessel"
        },
        {
         "code": "02.14",
         "name": "Choroid plexectomy"
        },
        {
         "code": "02.2",
         "name": "Ventriculostomy"
        },
        {
         "code": "02.31",
         "name": "Ventricular shunt to structure in head and neck"
        },
        {
         "code": "02.32",
         "name": "Ventricular shunt to circulatory system"
        },
        {
         "code": "02.33",
         "name": "Ventricular shunt to thoracic cavity"
        },
        {
         "code": "02.34",
         "name": "Ventricular shunt to abdominal cavity and organs"
        },
        {
         "code": "02.35",
         "name": "Ventricular shunt to urinary system"
        },
        {
         "code": "02.39",
         "name": "Other operations to establish drainage of ventricle"
        },
        {
         "code": "02.41",
         "name": "Irrigation and exploration of ventricular shunt"
        },
        {
         "code": "02.42",
         "name": "Replacement of ventricular shunt"
        },
        {
         "code": "02.43",
         "name": "Removal of ventricular shunt"
        },
        {
         "code": "02.91",
         "name": "Lysis of cortical adhesions"
        },
        {
         "code": "02.92",
         "name": "Repair of brain"
        },
        {
         "code": "02.93",
         "name": "Implantation or replacement of intracranial neurostimulator lead(s)"
        },
        {
         "code": "02.94",
         "name": "Insertion or replacement of skull tongs or halo traction device"
        },
        {
         "code": "02.95",
         "name": "Removal of skull tongs or halo traction device"
        },
        {
         "code": "02.96",
         "name": "Insertion of sphenoidal electrodes"
        },
        {
         "code": "02.99",
         "name": "Other operations on skull, brain, and cerebral meninges"
        },
        {
         "code": "03.01",
         "name": "Removal of foreign body from spinal canal"
        },
        {
         "code": "03.02",
         "name": "Reopening of laminectomy site"
        },
        {
         "code": "03.09",
         "name": "Other exploration and decompression of spinal canal"
        },
        {
         "code": "03.1",
         "name": "Division of intraspinal nerve root"
        },
        {
         "code": "03.21",
         "name": "Percutaneous chordotomy"
        },
        {
         "code": "03.29",
         "name": "Other chordotomy"
        },
        {
         "code": "03.31",
         "name": "Spinal tap"
        },
        {
         "code": "03.32",
         "name": "Biopsy of spinal cord or spinal meninges"
        },
        {
         "code": "03.39",
         "name": "Other diagnostic procedures on spinal cord and spinal canal structures"
        },
        {
         "code": "03.4",
         "name": "Excision or destruction of lesion of spinal cord or spinal meninges"
        },
        {
         "code": "03.51",
         "name": "Repair of spinal meningocele"
        },
        {
         "code": "03.52",
         "name": "Repair of spinal myelomeningocele"
        },
        {
         "code": "03.53",
         "name": "Repair of vertebral fracture"
        },
        {
         "code": "03.59",
         "name": "Other repair and plastic operations on spinal cord structures"
        },
        {
         "code": "03.6",
         "name": "Lysis of adhesions of spinal cord and nerve roots"
        },
        {
         "code": "03.71",
         "name": "Spinal subarachnoid-peritoneal shunt"
        },
        {
         "code": "03.72",
         "name": "Spinal subarachnoid-ureteral shunt"
        },
        {
         "code": "03.79",
         "name": "Other shunt of spinal theca"
        },
        {
         "code": "03.8",
         "name": "Injection of destructive agent into spinal canal"
        },
        {
         "code": "03.90",
         "name": "Insertion of catheter into spinal canal for infusion of therapeutic or palliative substances"
        },
        {
         "code": "03.91",
         "name": "Injection of anesthetic into spinal canal for analgesia"
        },
        {
         "code": "03.92",
         "name": "Injection of other agent into spinal canal"
        },
        {
         "code": "03.93",
         "name": "Implantation or replacement of spinal neurostimulator lead(s)"
        },
        {
         "code": "03.94",
         "name": "Removal of spinal neurostimulator lead(s)"
        },
        {
         "code": "03.95",
         "name": "Spinal blood patch"
        },
        {
         "code": "03.96",
         "name": "Percutaneous denervation of facet"
        },
        {
         "code": "03.97",
         "name": "Revision of spinal thecal shunt"
        },
        {
         "code": "03.98",
         "name": "Removal of spinal thecal shunt"
        },
        {
         "code": "03.99",
         "name": "Other operations on spinal cord and spinal canal structures"
        },
        {
         "code": "04.01",
         "name": "Excision of acoustic neuroma"
        },
        {
         "code": "04.02",
         "name": "Division of trigeminal nerve"
        },
        {
         "code": "04.03",
         "name": "Division or crushing of other cranial and peripheral nerves"
        },
        {
         "code": "04.04",
         "name": "Other incision of cranial and peripheral nerves"
        },
        {
         "code": "04.05",
         "name": "Gasserian ganglionectomy"
        },
        {
         "code": "04.06",
         "name": "Other cranial or peripheral ganglionectomy"
        },
        {
         "code": "04.07",
         "name": "Other excision or avulsion of cranial and peripheral nerves"
        },
        {
         "code": "04.11",
         "name": "Closed [percutaneous] [needle] biopsy of cranial or peripheral nerve or ganglion"
        },
        {
         "code": "04.12",
         "name": "Open biopsy of cranial or peripheral nerve or ganglion"
        },
        {
         "code": "04.19",
         "name": "Other diagnostic procedures on cranial and peripheral nerves and ganglia"
        },
        {
         "code": "04.2",
         "name": "Destruction of cranial and peripheral nerves"
        },
        {
         "code": "04.3",
         "name": "Suture of cranial and peripheral nerves"
        },
        {
         "code": "04.41",
         "name": "Decompression of trigeminal nerve root"
        },
        {
         "code": "04.42",
         "name": "Other cranial nerve decompression"
        },
        {
         "code": "04.43",
         "name": "Release of carpal tunnel"
        },
        {
         "code": "04.44",
         "name": "Release of tarsal tunnel"
        },
        {
         "code": "04.49",
         "name": "Other peripheral nerve or ganglion decompression or lysis of adhesions"
        },
        {
         "code": "04.5",
         "name": "Cranial or peripheral nerve graft"
        },
        {
         "code": "04.6",
         "name": "Transposition of cranial and peripheral nerves"
        },
        {
         "code": "04.71",
         "name": "Hypoglossal-facial anastomosis"
        },
        {
         "code": "04.72",
         "name": "Accessory-facial anastomosis"
        },
        {
         "code": "04.73",
         "name": "Accessory-hypoglossal anastomosis"
        },
        {
         "code": "04.74",
         "name": "Other anastomosis of cranial or peripheral nerve"
        },
        {
         "code": "04.75",
         "name": "Revision of previous repair of cranial and peripheral nerves"
        },
        {
         "code": "04.76",
         "name": "Repair of old traumatic injury of cranial and peripheral nerves"
        },
        {
         "code": "04.79",
         "name": "Other neuroplasty"
        },
        {
         "code": "04.80",
         "name": "Peripheral nerve injection, not otherwise specified"
        },
        {
         "code": "04.81",
         "name": "Injection of anesthetic into peripheral nerve for analgesia"
        },
        {
         "code": "04.89",
         "name": "Injection of other agent, except neurolytic"
        },
        {
         "code": "04.91",
         "name": "Neurectasis"
        },
        {
         "code": "04.92",
         "name": "Implantation or replacement of peripheral neurostimulator lead(s)"
        },
        {
         "code": "04.93",
         "name": "Removal of peripheral neurostimulator lead(s)"
        },
        {
         "code": "04.99",
         "name": "Other operations on cranial and peripheral nerves"
        },
        {
         "code": "05.0",
         "name": "Division of sympathetic nerve or ganglion"
        },
        {
         "code": "05.11",
         "name": "Biopsy of sympathetic nerve or ganglion"
        },
        {
         "code": "05.19",
         "name": "Other diagnostic procedures on sympathetic nerves or ganglia"
        },
        {
         "code": "05.21",
         "name": "Sphenopalatine ganglionectomy"
        },
        {
         "code": "05.22",
         "name": "Cervical sympathectomy"
        },
        {
         "code": "05.23",
         "name": "Lumbar sympathectomy"
        },
        {
         "code": "05.24",
         "name": "Presacral sympathectomy"
        },
        {
         "code": "05.25",
         "name": "Periarterial sympathectomy"
        },
        {
         "code": "05.29",
         "name": "Other sympathectomy and ganglionectomy"
        },
        {
         "code": "05.31",
         "name": "Injection of anesthetic into sympathetic nerve for analgesia"
        },
        {
         "code": "05.32",
         "name": "Injection of neurolytic agent into sympathetic nerve"
        },
        {
         "code": "05.39",
         "name": "Other injection into sympathetic nerve or ganglion"
        },
        {
         "code": "05.81",
         "name": "Repair of sympathetic nerve or ganglion"
        },
        {
         "code": "05.89",
         "name": "Other operations on sympathetic nerves or ganglia"
        },
        {
         "code": "05.9",
         "name": "Other operations on nervous system"
        },
        {
         "code": "06.01",
         "name": "Aspiration of thyroid field"
        },
        {
         "code": "06.02",
         "name": "Reopening of wound of thyroid field"
        },
        {
         "code": "06.09",
         "name": "Other incision of thyroid field"
        },
        {
         "code": "06.11",
         "name": "Closed [percutaneous] [needle] biopsy of thyroid gland"
        },
        {
         "code": "06.12",
         "name": "Open biopsy of thyroid gland"
        },
        {
         "code": "06.13",
         "name": "Biopsy of parathyroid gland"
        },
        {
         "code": "06.19",
         "name": "Other diagnostic procedures on thyroid and parathyroid glands"
        },
        {
         "code": "06.2",
         "name": "Unilateral thyroid lobectomy"
        },
        {
         "code": "06.31",
         "name": "Excision of lesion of thyroid"
        },
        {
         "code": "06.39",
         "name": "Other partial thyroidectomy"
        },
        {
         "code": "06.4",
         "name": "Complete thyroidectomy"
        },
        {
         "code": "06.50",
         "name": "Substernal thyroidectomy, not otherwise specified"
        },
        {
         "code": "06.51",
         "name": "Partial substernal thyroidectomy"
        },
        {
         "code": "06.52",
         "name": "Complete substernal thyroidectomy"
        },
        {
         "code": "06.6",
         "name": "Excision of lingual thyroid"
        },
        {
         "code": "06.7",
         "name": "Excision of thyroglossal duct or tract"
        },
        {
         "code": "06.81",
         "name": "Complete parathyroidectomy"
        },
        {
         "code": "06.89",
         "name": "Other parathyroidectomy"
        },
        {
         "code": "06.91",
         "name": "Division of thyroid isthmus"
        },
        {
         "code": "06.92",
         "name": "Ligation of thyroid vessels"
        },
        {
         "code": "06.93",
         "name": "Suture of thyroid gland"
        },
        {
         "code": "06.94",
         "name": "Thyroid tissue reimplantation"
        },
        {
         "code": "06.95",
         "name": "Parathyroid tissue reimplantation"
        },
        {
         "code": "06.98",
         "name": "Other operations on thyroid glands"
        },
        {
         "code": "06.99",
         "name": "Other operations on parathyroid glands"
        },
        {
         "code": "07.00",
         "name": "Exploration of adrenal field, not otherwise specified"
        },
        {
         "code": "07.01",
         "name": "Unilateral exploration of adrenal field"
        },
        {
         "code": "07.02",
         "name": "Bilateral exploration of adrenal field"
        },
        {
         "code": "07.11",
         "name": "Closed [percutaneous] [needle] biopsy of adrenal gland"
        },
        {
         "code": "07.12",
         "name": "Open biopsy of adrenal gland"
        },
        {
         "code": "07.13",
         "name": "Biopsy of pituitary gland, transfrontal approach"
        },
        {
         "code": "07.14",
         "name": "Biopsy of pituitary gland, transsphenoidal approach"
        },
        {
         "code": "07.15",
         "name": "Biopsy of pituitary gland, unspecified approach"
        },
        {
         "code": "07.16",
         "name": "Biopsy of thymus"
        },
        {
         "code": "07.17",
         "name": "Biopsy of pineal gland"
        },
        {
         "code": "07.19",
         "name": "Other diagnostic procedures on adrenal glands, pituitary gland, pineal gland, and thymus"
        },
        {
         "code": "07.21",
         "name": "Excision of lesion of adrenal gland"
        },
        {
         "code": "07.22",
         "name": "Unilateral adrenalectomy"
        },
        {
         "code": "07.29",
         "name": "Other partial adrenalectomy"
        },
        {
         "code": "07.3",
         "name": "Bilateral adrenalectomy"
        },
        {
         "code": "07.41",
         "name": "Incision of adrenal gland"
        },
        {
         "code": "07.42",
         "name": "Division of nerves to adrenal glands"
        },
        {
         "code": "07.43",
         "name": "Ligation of adrenal vessels"
        },
        {
         "code": "07.44",
         "name": "Repair of adrenal gland"
        },
        {
         "code": "07.45",
         "name": "Reimplantation of adrenal tissue"
        },
        {
         "code": "07.49",
         "name": "Other operations on adrenal glands, nerves, and vessels"
        },
        {
         "code": "07.51",
         "name": "Exploration of pineal field"
        },
        {
         "code": "07.52",
         "name": "Incision of pineal gland"
        },
        {
         "code": "07.53",
         "name": "Partial excision of pineal gland"
        },
        {
         "code": "07.54",
         "name": "Total excision of pineal gland"
        },
        {
         "code": "07.59",
         "name": "Other operations on pineal gland"
        },
        {
         "code": "07.61",
         "name": "Partial excision of pituitary gland, transfrontal approach"
        },
        {
         "code": "07.62",
         "name": "Partial excision of pituitary gland, transsphenoidal approach"
        },
        {
         "code": "07.63",
         "name": "Partial excision of pituitary gland, unspecified approach"
        },
        {
         "code": "07.64",
         "name": "Total excision of pituitary gland, transfrontal approach"
        },
        {
         "code": "07.65",
         "name": "Total excision of pituitary gland, transsphenoidal approach"
        },
        {
         "code": "07.68",
         "name": "Total excision of pituitary gland, other specified approach"
        },
        {
         "code": "07.69",
         "name": "Total excision of pituitary gland, unspecified approach"
        },
        {
         "code": "07.71",
         "name": "Exploration of pituitary fossa"
        },
        {
         "code": "07.72",
         "name": "Incision of pituitary gland"
        },
        {
         "code": "07.79",
         "name": "Other operations on hypophysis"
        },
        {
         "code": "07.80",
         "name": "Thymectomy, not otherwise specified"
        },
        {
         "code": "07.81",
         "name": "Other partial excision of thymus"
        },
        {
         "code": "07.82",
         "name": "Other total excision of thymus"
        },
        {
         "code": "07.83",
         "name": "Thoracoscopic partial excision of thymus"
        },
        {
         "code": "07.84",
         "name": "Thoracoscopic total excision of thymus"
        },
        {
         "code": "07.91",
         "name": "Exploration of thymus field"
        },
        {
         "code": "07.92",
         "name": "Other incision of thymus"
        },
        {
         "code": "07.93",
         "name": "Repair of thymus"
        },
        {
         "code": "07.94",
         "name": "Transplantation of thymus"
        },
        {
         "code": "07.95",
         "name": "Thoracoscopic incision of thymus"
        },
        {
         "code": "07.98",
         "name": "Other and unspecified thoracoscopic operations on thymus"
        },
        {
         "code": "07.99",
         "name": "Other and unspecified operations on thymus"
        },
        {
         "code": "08.01",
         "name": "Incision of lid margin"
        },
        {
         "code": "08.02",
         "name": "Severing of blepharorrhaphy"
        },
        {
         "code": "08.09",
         "name": "Other incision of eyelid"
        },
        {
         "code": "08.11",
         "name": "Biopsy of eyelid"
        },
        {
         "code": "08.19",
         "name": "Other diagnostic procedures on eyelid"
        },
        {
         "code": "08.20",
         "name": "Removal of lesion of eyelid, not otherwise specified"
        },
        {
         "code": "08.21",
         "name": "Excision of chalazion"
        },
        {
         "code": "08.22",
         "name": "Excision of other minor lesion of eyelid"
        },
        {
         "code": "08.23",
         "name": "Excision of major lesion of eyelid, partial-thickness"
        },
        {
         "code": "08.24",
         "name": "Excision of major lesion of eyelid, full-thickness"
        },
        {
         "code": "08.25",
         "name": "Destruction of lesion of eyelid"
        },
        {
         "code": "08.31",
         "name": "Repair of blepharoptosis by frontalis muscle technique with suture"
        },
        {
         "code": "08.32",
         "name": "Repair of blepharoptosis by frontalis muscle technique with fascial sling"
        },
        {
         "code": "08.33",
         "name": "Repair of blepharoptosis by resection or advancement of levator muscle or aponeurosis"
        },
        {
         "code": "08.34",
         "name": "Repair of blepharoptosis by other levator muscle techniques"
        },
        {
         "code": "08.35",
         "name": "Repair of blepharoptosis by tarsal technique"
        },
        {
         "code": "08.36",
         "name": "Repair of blepharoptosis by other techniques"
        },
        {
         "code": "08.37",
         "name": "Reduction of overcorrection of ptosis"
        },
        {
         "code": "08.38",
         "name": "Correction of lid retraction"
        },
        {
         "code": "08.41",
         "name": "Repair of entropion or ectropion by thermocauterization"
        },
        {
         "code": "08.42",
         "name": "Repair of entropion or ectropion by suture technique"
        },
        {
         "code": "08.43",
         "name": "Repair of entropion or ectropion with wedge resection"
        },
        {
         "code": "08.44",
         "name": "Repair of entropion or ectropion with lid reconstruction"
        },
        {
         "code": "08.49",
         "name": "Other repair of entropion or ectropion"
        },
        {
         "code": "08.51",
         "name": "Canthotomy"
        },
        {
         "code": "08.52",
         "name": "Blepharorrhaphy"
        },
        {
         "code": "08.59",
         "name": "Other adjustment of lid position"
        },
        {
         "code": "08.61",
         "name": "Reconstruction of eyelid with skin flap or graft"
        },
        {
         "code": "08.62",
         "name": "Reconstruction of eyelid with mucous membrane flap or graft"
        },
        {
         "code": "08.63",
         "name": "Reconstruction of eyelid with hair follicle graft"
        },
        {
         "code": "08.64",
         "name": "Reconstruction of eyelid with tarsoconjunctival flap"
        },
        {
         "code": "08.69",
         "name": "Other reconstruction of eyelid with flaps or grafts"
        },
        {
         "code": "08.70",
         "name": "Reconstruction of eyelid, not otherwise specified"
        },
        {
         "code": "08.71",
         "name": "Reconstruction of eyelid involving lid margin, partial-thickness"
        },
        {
         "code": "08.72",
         "name": "Other reconstruction of eyelid, partial-thickness"
        },
        {
         "code": "08.73",
         "name": "Reconstruction of eyelid involving lid margin, full-thickness"
        },
        {
         "code": "08.74",
         "name": "Other reconstruction of eyelid, full-thickness"
        },
        {
         "code": "08.81",
         "name": "Linear repair of laceration of eyelid or eyebrow"
        },
        {
         "code": "08.82",
         "name": "Repair of laceration involving lid margin, partial-thickness"
        },
        {
         "code": "08.83",
         "name": "Other repair of laceration of eyelid, partial-thickness"
        },
        {
         "code": "08.84",
         "name": "Repair of laceration involving lid margin, full-thickness"
        },
        {
         "code": "08.85",
         "name": "Other repair of laceration of eyelid, full-thickness"
        },
        {
         "code": "08.86",
         "name": "Lower eyelid rhytidectomy"
        },
        {
         "code": "08.87",
         "name": "Upper eyelid rhytidectomy"
        },
        {
         "code": "08.89",
         "name": "Other eyelid repair"
        },
        {
         "code": "08.91",
         "name": "Electrosurgical epilation of eyelid"
        },
        {
         "code": "08.92",
         "name": "Cryosurgical epilation of eyelid"
        },
        {
         "code": "08.93",
         "name": "Other epilation of eyelid"
        },
        {
         "code": "08.99",
         "name": "Other operations on eyelids"
        },
        {
         "code": "09.0",
         "name": "Incision of lacrimal gland"
        },
        {
         "code": "09.11",
         "name": "Biopsy of lacrimal gland"
        },
        {
         "code": "09.12",
         "name": "Biopsy of lacrimal sac"
        },
        {
         "code": "09.19",
         "name": "Other diagnostic procedures on lacrimal system"
        },
        {
         "code": "09.20",
         "name": "Excision of lacrimal gland, not otherwise specified"
        },
        {
         "code": "09.21",
         "name": "Excision of lesion of lacrimal gland"
        },
        {
         "code": "09.22",
         "name": "Other partial dacryoadenectomy"
        },
        {
         "code": "09.23",
         "name": "Total dacryoadenectomy"
        },
        {
         "code": "09.3",
         "name": "Other operations on lacrimal gland"
        },
        {
         "code": "09.41",
         "name": "Probing of lacrimal punctum"
        },
        {
         "code": "09.42",
         "name": "Probing of lacrimal canaliculi"
        },
        {
         "code": "09.43",
         "name": "Probing of nasolacrimal duct"
        },
        {
         "code": "09.44",
         "name": "Intubation of nasolacrimal duct"
        },
        {
         "code": "09.49",
         "name": "Other manipulation of lacrimal passage"
        },
        {
         "code": "09.51",
         "name": "Incision of lacrimal punctum"
        },
        {
         "code": "09.52",
         "name": "Incision of lacrimal canaliculi"
        },
        {
         "code": "09.53",
         "name": "Incision of lacrimal sac"
        },
        {
         "code": "09.59",
         "name": "Other incision of lacrimal passages"
        },
        {
         "code": "09.6",
         "name": "Excision of lacrimal sac and passage"
        },
        {
         "code": "09.71",
         "name": "Correction of everted punctum"
        },
        {
         "code": "09.72",
         "name": "Other repair of punctum"
        },
        {
         "code": "09.73",
         "name": "Repair of canaliculus"
        },
        {
         "code": "09.81",
         "name": "Dacryocystorhinostomy [DCR]"
        },
        {
         "code": "09.82",
         "name": "Conjunctivocystorhinostomy"
        },
        {
         "code": "09.83",
         "name": "Conjunctivorhinostomy with insertion of tube or stent"
        },
        {
         "code": "09.91",
         "name": "Obliteration of lacrimal punctum"
        },
        {
         "code": "09.99",
         "name": "Other operations on lacrimal system"
        },
        {
         "code": "10.0",
         "name": "Removal of embedded foreign body from conjunctiva by incision"
        },
        {
         "code": "10.1",
         "name": "Other incision of conjunctiva"
        },
        {
         "code": "10.21",
         "name": "Biopsy of conjunctiva"
        },
        {
         "code": "10.29",
         "name": "Other diagnostic procedures on conjunctiva"
        },
        {
         "code": "10.31",
         "name": "Excision of lesion or tissue of conjunctiva"
        },
        {
         "code": "10.32",
         "name": "Destruction of lesion of conjunctiva"
        },
        {
         "code": "10.33",
         "name": "Other destructive procedures on conjunctiva"
        },
        {
         "code": "10.41",
         "name": "Repair of symblepharon with free graft"
        },
        {
         "code": "10.42",
         "name": "Reconstruction of conjunctival cul-de-sac with free graft"
        },
        {
         "code": "10.43",
         "name": "Other reconstruction of conjunctival cul-de-sac"
        },
        {
         "code": "10.44",
         "name": "Other free graft to conjunctiva"
        },
        {
         "code": "10.49",
         "name": "Other conjunctivoplasty"
        },
        {
         "code": "10.5",
         "name": "Lysis of adhesions of conjunctiva and eyelid"
        },
        {
         "code": "10.6",
         "name": "Repair of laceration of conjunctiva"
        },
        {
         "code": "10.91",
         "name": "Subconjunctival injection"
        },
        {
         "code": "10.99",
         "name": "Other operations on conjunctiva"
        },
        {
         "code": "11.0",
         "name": "Magnetic removal of embedded foreign body from cornea"
        },
        {
         "code": "11.1",
         "name": "Incision of cornea"
        },
        {
         "code": "11.21",
         "name": "Scraping of cornea for smear or culture"
        },
        {
         "code": "11.22",
         "name": "Biopsy of cornea"
        },
        {
         "code": "11.29",
         "name": "Other diagnostic procedures on cornea"
        },
        {
         "code": "11.31",
         "name": "Transposition of pterygium"
        },
        {
         "code": "11.32",
         "name": "Excision of pterygium with corneal graft"
        },
        {
         "code": "11.39",
         "name": "Other excision of pterygium"
        },
        {
         "code": "11.41",
         "name": "Mechanical removal of corneal epithelium"
        },
        {
         "code": "11.42",
         "name": "Thermocauterization of corneal lesion"
        },
        {
         "code": "11.43",
         "name": "Cryotherapy of corneal lesion"
        },
        {
         "code": "11.49",
         "name": "Other removal or destruction of corneal lesion"
        },
        {
         "code": "11.51",
         "name": "Suture of corneal laceration"
        },
        {
         "code": "11.52",
         "name": "Repair of postoperative wound dehiscence of cornea"
        },
        {
         "code": "11.53",
         "name": "Repair of corneal laceration or wound with conjunctival flap"
        },
        {
         "code": "11.59",
         "name": "Other repair of cornea"
        },
        {
         "code": "11.60",
         "name": "Corneal transplant, not otherwise specified"
        },
        {
         "code": "11.61",
         "name": "Lamellar keratoplasty with autograft"
        },
        {
         "code": "11.62",
         "name": "Other lamellar keratoplasty"
        },
        {
         "code": "11.63",
         "name": "Penetrating keratoplasty with autograft"
        },
        {
         "code": "11.64",
         "name": "Other penetrating keratoplasty"
        },
        {
         "code": "11.69",
         "name": "Other corneal transplant"
        },
        {
         "code": "11.71",
         "name": "Keratomileusis"
        },
        {
         "code": "11.72",
         "name": "Keratophakia"
        },
        {
         "code": "11.73",
         "name": "Keratoprosthesis"
        },
        {
         "code": "11.74",
         "name": "Thermokeratoplasty"
        },
        {
         "code": "11.75",
         "name": "Radial keratotomy"
        },
        {
         "code": "11.76",
         "name": "Epikeratophakia"
        },
        {
         "code": "11.79",
         "name": "Other reconstructive and refractive surgery on cornea"
        },
        {
         "code": "11.91",
         "name": "Tattooing of cornea"
        },
        {
         "code": "11.92",
         "name": "Removal of artificial implant from cornea"
        },
        {
         "code": "11.99",
         "name": "Other operations on cornea"
        },
        {
         "code": "12.00",
         "name": "Removal of intraocular foreign body from anterior segment of eye, not otherwise specified"
        },
        {
         "code": "12.01",
         "name": "Removal of intraocular foreign body from anterior segment of eye with use of magnet"
        },
        {
         "code": "12.02",
         "name": "Removal of intraocular foreign body from anterior segment of eye without use of magnet"
        },
        {
         "code": "12.11",
         "name": "Iridotomy with transfixion"
        },
        {
         "code": "12.12",
         "name": "Other iridotomy"
        },
        {
         "code": "12.13",
         "name": "Excision of prolapsed iris"
        },
        {
         "code": "12.14",
         "name": "Other iridectomy"
        },
        {
         "code": "12.21",
         "name": "Diagnostic aspiration of anterior chamber of eye"
        },
        {
         "code": "12.22",
         "name": "Biopsy of iris"
        },
        {
         "code": "12.29",
         "name": "Other diagnostic procedures on iris, ciliary body, sclera, and anterior chamber"
        },
        {
         "code": "12.31",
         "name": "Lysis of goniosynechiae"
        },
        {
         "code": "12.32",
         "name": "Lysis of other anterior synechiae"
        },
        {
         "code": "12.33",
         "name": "Lysis of posterior synechiae"
        },
        {
         "code": "12.34",
         "name": "Lysis of corneovitreal adhesions"
        },
        {
         "code": "12.35",
         "name": "Coreoplasty"
        },
        {
         "code": "12.39",
         "name": "Other iridoplasty"
        },
        {
         "code": "12.40",
         "name": "Removal of lesion of anterior segment of eye, not otherwise specified"
        },
        {
         "code": "12.41",
         "name": "Destruction of lesion of iris, nonexcisional"
        },
        {
         "code": "12.42",
         "name": "Excision of lesion of iris"
        },
        {
         "code": "12.43",
         "name": "Destruction of lesion of ciliary body, nonexcisional"
        },
        {
         "code": "12.44",
         "name": "Excision of lesion of ciliary body"
        },
        {
         "code": "12.51",
         "name": "Goniopuncture without goniotomy"
        },
        {
         "code": "12.52",
         "name": "Goniotomy without goniopuncture"
        },
        {
         "code": "12.53",
         "name": "Goniotomy with goniopuncture"
        },
        {
         "code": "12.54",
         "name": "Trabeculotomy ab externo"
        },
        {
         "code": "12.55",
         "name": "Cyclodialysis"
        },
        {
         "code": "12.59",
         "name": "Other facilitation of intraocular circulation"
        },
        {
         "code": "12.61",
         "name": "Trephination of sclera with iridectomy"
        },
        {
         "code": "12.62",
         "name": "Thermocauterization of sclera with iridectomy"
        },
        {
         "code": "12.63",
         "name": "Iridencleisis and iridotasis"
        },
        {
         "code": "12.64",
         "name": "Trabeculectomy ab externo"
        },
        {
         "code": "12.65",
         "name": "Other scleral fistulization with iridectomy"
        },
        {
         "code": "12.66",
         "name": "Postoperative revision of scleral fistulization procedure"
        },
        {
         "code": "12.69",
         "name": "Other scleral fistulizing procedure"
        },
        {
         "code": "12.71",
         "name": "Cyclodiathermy"
        },
        {
         "code": "12.72",
         "name": "Cyclocryotherapy"
        },
        {
         "code": "12.73",
         "name": "Cyclophotocoagulation"
        },
        {
         "code": "12.74",
         "name": "Diminution of ciliary body, not otherwise specified"
        },
        {
         "code": "12.79",
         "name": "Other glaucoma procedures"
        },
        {
         "code": "12.81",
         "name": "Suture of laceration of sclera"
        },
        {
         "code": "12.82",
         "name": "Repair of scleral fistula"
        },
        {
         "code": "12.83",
         "name": "Revision of operative wound of anterior segment, not elsewhere classified"
        },
        {
         "code": "12.84",
         "name": "Excision or destruction of lesion of sclera"
        },
        {
         "code": "12.85",
         "name": "Repair of scleral staphyloma with graft"
        },
        {
         "code": "12.86",
         "name": "Other repair of scleral staphyloma"
        },
        {
         "code": "12.87",
         "name": "Scleral reinforcement with graft"
        },
        {
         "code": "12.88",
         "name": "Other scleral reinforcement"
        },
        {
         "code": "12.89",
         "name": "Other operations on sclera"
        },
        {
         "code": "12.91",
         "name": "Therapeutic evacuation of anterior chamber"
        },
        {
         "code": "12.92",
         "name": "Injection into anterior chamber"
        },
        {
         "code": "12.93",
         "name": "Removal or destruction of epithelial downgrowth from anterior chamber"
        },
        {
         "code": "12.97",
         "name": "Other operations on iris"
        },
        {
         "code": "12.98",
         "name": "Other operations on ciliary body"
        },
        {
         "code": "12.99",
         "name": "Other operations on anterior chamber"
        },
        {
         "code": "13.00",
         "name": "Removal of foreign body from lens, not otherwise specified"
        },
        {
         "code": "13.01",
         "name": "Removal of foreign body from lens with use of magnet"
        },
        {
         "code": "13.02",
         "name": "Removal of foreign body from lens without use of magnet"
        },
        {
         "code": "13.11",
         "name": "Intracapsular extraction of lens by temporal inferior route"
        },
        {
         "code": "13.19",
         "name": "Other intracapsular extraction of lens"
        },
        {
         "code": "13.2",
         "name": "Extracapsular extraction of lens by linear extraction technique"
        },
        {
         "code": "13.3",
         "name": "Extracapsular extraction of lens by simple aspiration (and irrigation) technique"
        },
        {
         "code": "13.41",
         "name": "Phacoemulsification and aspiration of cataract"
        },
        {
         "code": "13.42",
         "name": "Mechanical phacofragmentation and aspiration of cataract by posterior route"
        },
        {
         "code": "13.43",
         "name": "Mechanical phacofragmentation and other aspiration of cataract"
        },
        {
         "code": "13.51",
         "name": "Extracapsular extraction of lens by temporal inferior route"
        },
        {
         "code": "13.59",
         "name": "Other extracapsular extraction of lens"
        },
        {
         "code": "13.64",
         "name": "Discission of secondary membrane [after cataract]"
        },
        {
         "code": "13.65",
         "name": "Excision of secondary membrane [after cataract]"
        },
        {
         "code": "13.66",
         "name": "Mechanical fragmentation of secondary membrane [after cataract]"
        },
        {
         "code": "13.69",
         "name": "Other cataract extraction"
        },
        {
         "code": "13.70",
         "name": "Insertion of pseudophakos, not otherwise specified"
        },
        {
         "code": "13.71",
         "name": "Insertion of intraocular lens prosthesis at time of cataract extraction, one-stage"
        },
        {
         "code": "13.72",
         "name": "Secondary insertion of intraocular lens prosthesis"
        },
        {
         "code": "13.8",
         "name": "Removal of implanted lens"
        },
        {
         "code": "13.90",
         "name": "Operation on lens, not elsewhere classified"
        },
        {
         "code": "13.91",
         "name": "Implantation of intraocular telescope prosthesis"
        },
        {
         "code": "14.00",
         "name": "Removal of foreign body from posterior segment of eye, not otherwise specified"
        },
        {
         "code": "14.01",
         "name": "Removal of foreign body from posterior segment of eye with use of magnet"
        },
        {
         "code": "14.02",
         "name": "Removal of foreign body from posterior segment of eye without use of magnet"
        },
        {
         "code": "14.11",
         "name": "Diagnostic aspiration of vitreous"
        },
        {
         "code": "14.19",
         "name": "Other diagnostic procedures on retina, choroid, vitreous, and posterior chamber"
        },
        {
         "code": "14.21",
         "name": "Destruction of chorioretinal lesion by diathermy"
        },
        {
         "code": "14.22",
         "name": "Destruction of chorioretinal lesion by cryotherapy"
        },
        {
         "code": "14.23",
         "name": "Destruction of chorioretinal lesion by xenon arc photocoagulation"
        },
        {
         "code": "14.24",
         "name": "Destruction of chorioretinal lesion by laser photocoagulation"
        },
        {
         "code": "14.25",
         "name": "Destruction of chorioretinal lesion by photocoagulation of unspecified type"
        },
        {
         "code": "14.26",
         "name": "Destruction of chorioretinal lesion by radiation therapy"
        },
        {
         "code": "14.27",
         "name": "Destruction of chorioretinal lesion by implantation of radiation source"
        },
        {
         "code": "14.29",
         "name": "Other destruction of chorioretinal lesion"
        },
        {
         "code": "14.31",
         "name": "Repair of retinal tear by diathermy"
        },
        {
         "code": "14.32",
         "name": "Repair of retinal tear by cryotherapy"
        },
        {
         "code": "14.33",
         "name": "Repair of retinal tear by xenon arc photocoagulation"
        },
        {
         "code": "14.34",
         "name": "Repair of retinal tear by laser photocoagulation"
        },
        {
         "code": "14.35",
         "name": "Repair of retinal tear by photocoagulation of unspecified type"
        },
        {
         "code": "14.39",
         "name": "Other repair of retinal tear"
        },
        {
         "code": "14.41",
         "name": "Scleral buckling with implant"
        },
        {
         "code": "14.49",
         "name": "Other scleral buckling"
        },
        {
         "code": "14.51",
         "name": "Repair of retinal detachment with diathermy"
        },
        {
         "code": "14.52",
         "name": "Repair of retinal detachment with cryotherapy"
        },
        {
         "code": "14.53",
         "name": "Repair of retinal detachment with xenon arc photocoagulation"
        },
        {
         "code": "14.54",
         "name": "Repair of retinal detachment with laser photocoagulation"
        },
        {
         "code": "14.55",
         "name": "Repair of retinal detachment with photocoagulation of unspecified type"
        },
        {
         "code": "14.59",
         "name": "Other repair of retinal detachment"
        },
        {
         "code": "14.6",
         "name": "Removal of surgically implanted material from posterior segment of eye"
        },
        {
         "code": "14.71",
         "name": "Removal of vitreous, anterior approach"
        },
        {
         "code": "14.72",
         "name": "Other removal of vitreous"
        },
        {
         "code": "14.73",
         "name": "Mechanical vitrectomy by anterior approach"
        },
        {
         "code": "14.74",
         "name": "Other mechanical vitrectomy"
        },
        {
         "code": "14.75",
         "name": "Injection of vitreous substitute"
        },
        {
         "code": "14.79",
         "name": "Other operations on vitreous"
        },
        {
         "code": "14.9",
         "name": "Other operations on retina, choroid, and posterior chamber"
        },
        {
         "code": "15.01",
         "name": "Biopsy of extraocular muscle or tendon"
        },
        {
         "code": "15.09",
         "name": "Other diagnostic procedures on extraocular muscles and tendons"
        },
        {
         "code": "15.11",
         "name": "Recession of one extraocular muscle"
        },
        {
         "code": "15.12",
         "name": "Advancement of one extraocular muscle"
        },
        {
         "code": "15.13",
         "name": "Resection of one extraocular muscle"
        },
        {
         "code": "15.19",
         "name": "Other operations on one extraocular muscle involving temporary detachment from globe"
        },
        {
         "code": "15.21",
         "name": "Lengthening procedure on one extraocular muscle"
        },
        {
         "code": "15.22",
         "name": "Shortening procedure on one extraocular muscle"
        },
        {
         "code": "15.29",
         "name": "Other operations on one extraocular muscle"
        },
        {
         "code": "15.3",
         "name": "Operations on two or more extraocular muscles involving temporary detachment from globe, one or both eyes"
        },
        {
         "code": "15.4",
         "name": "Other operations on two or more extraocular muscles, one or both eyes"
        },
        {
         "code": "15.5",
         "name": "Transposition of extraocular muscles"
        },
        {
         "code": "15.6",
         "name": "Revision of extraocular muscle surgery"
        },
        {
         "code": "15.7",
         "name": "Repair of injury of extraocular muscle"
        },
        {
         "code": "15.9",
         "name": "Other operations on extraocular muscles and tendons"
        },
        {
         "code": "16.01",
         "name": "Orbitotomy with bone flap"
        },
        {
         "code": "16.02",
         "name": "Orbitotomy with insertion of orbital implant"
        },
        {
         "code": "16.09",
         "name": "Other orbitotomy"
        },
        {
         "code": "16.1",
         "name": "Removal of penetrating foreign body from eye, not otherwise specified"
        },
        {
         "code": "16.21",
         "name": "Ophthalmoscopy"
        },
        {
         "code": "16.22",
         "name": "Diagnostic aspiration of orbit"
        },
        {
         "code": "16.23",
         "name": "Biopsy of eyeball and orbit"
        },
        {
         "code": "16.29",
         "name": "Other diagnostic procedures on orbit and eyeball"
        },
        {
         "code": "16.31",
         "name": "Removal of ocular contents with synchronous implant into scleral shell"
        },
        {
         "code": "16.39",
         "name": "Other evisceration of eyeball"
        },
        {
         "code": "16.41",
         "name": "Enucleation of eyeball with synchronous implant into Tenon's capsule with attachment of muscles"
        },
        {
         "code": "16.42",
         "name": "Enucleation of eyeball with other synchronous implant"
        },
        {
         "code": "16.49",
         "name": "Other enucleation of eyeball"
        },
        {
         "code": "16.51",
         "name": "Exenteration of orbit with removal of adjacent structures"
        },
        {
         "code": "16.52",
         "name": "Exenteration of orbit with therapeutic removal of orbital bone"
        },
        {
         "code": "16.59",
         "name": "Other exenteration of orbit"
        },
        {
         "code": "16.61",
         "name": "Secondary insertion of ocular implant"
        },
        {
         "code": "16.62",
         "name": "Revision and reinsertion of ocular implant"
        },
        {
         "code": "16.63",
         "name": "Revision of enucleation socket with graft"
        },
        {
         "code": "16.64",
         "name": "Other revision of enucleation socket"
        },
        {
         "code": "16.65",
         "name": "Secondary graft to exenteration cavity"
        },
        {
         "code": "16.66",
         "name": "Other revision of exenteration cavity"
        },
        {
         "code": "16.69",
         "name": "Other secondary procedures after removal of eyeball"
        },
        {
         "code": "16.71",
         "name": "Removal of ocular implant"
        },
        {
         "code": "16.72",
         "name": "Removal of orbital implant"
        },
        {
         "code": "16.81",
         "name": "Repair of wound of orbit"
        },
        {
         "code": "16.82",
         "name": "Repair of rupture of eyeball"
        },
        {
         "code": "16.89",
         "name": "Other repair of injury of eyeball or orbit"
        },
        {
         "code": "16.91",
         "name": "Retrobulbar injection of therapeutic agent"
        },
        {
         "code": "16.92",
         "name": "Excision of lesion of orbit"
        },
        {
         "code": "16.93",
         "name": "Excision of lesion of eye, unspecified structure"
        },
        {
         "code": "16.98",
         "name": "Other operations on orbit"
        },
        {
         "code": "16.99",
         "name": "Other operations on eyeball"
        },
        {
         "code": "17.11",
         "name": "Laparoscopic repair of direct inguinal hernia with graft or prosthesis"
        },
        {
         "code": "17.12",
         "name": "Laparoscopic repair of indirect inguinal hernia with graft or prosthesis"
        },
        {
         "code": "17.13",
         "name": "Laparoscopic repair of inguinal hernia with graft or prosthesis, not otherwise specified"
        },
        {
         "code": "17.21",
         "name": "Laparoscopic bilateral repair of direct inguinal hernia with graft or prosthesis"
        },
        {
         "code": "17.22",
         "name": "Laparoscopic bilateral repair of indirect inguinal hernia with graft or prosthesis"
        },
        {
         "code": "17.23",
         "name": "Laparoscopic bilateral repair of inguinal hernia, one direct and one indirect, with graft or prosthesis"
        },
        {
         "code": "17.24",
         "name": "Laparoscopic bilateral repair of inguinal hernia with graft or prosthesis, not otherwise specified"
        },
        {
         "code": "17.31",
         "name": "Laparoscopic multiple segmental resection of large intestine"
        },
        {
         "code": "17.32",
         "name": "Laparoscopic cecectomy"
        },
        {
         "code": "17.33",
         "name": "Laparoscopic right hemicolectomy"
        },
        {
         "code": "17.34",
         "name": "Laparoscopic resection of transverse colon"
        },
        {
         "code": "17.35",
         "name": "Laparoscopic left hemicolectomy"
        },
        {
         "code": "17.36",
         "name": "Laparoscopic sigmoidectomy"
        },
        {
         "code": "17.39",
         "name": "Other laparoscopic partial excision of large intestine"
        },
        {
         "code": "17.41",
         "name": "Open robotic assisted procedure"
        },
        {
         "code": "17.42",
         "name": "Laparoscopic robotic assisted procedure"
        },
        {
         "code": "17.43",
         "name": "Percutaneous robotic assisted procedure"
        },
        {
         "code": "17.44",
         "name": "Endoscopic robotic assisted procedure"
        },
        {
         "code": "17.45",
         "name": "Thoracoscopic robotic assisted procedure"
        },
        {
         "code": "17.49",
         "name": "Other and unspecified robotic assisted procedure"
        },
        {
         "code": "17.51",
         "name": "Implantation of rechargeable cardiac contractility modulation [CCM], total system"
        },
        {
         "code": "17.52",
         "name": "Implantation or replacement of cardiac contractility modulation [CCM] rechargeable pulse generator only"
        },
        {
         "code": "17.61",
         "name": "Laser interstitial thermal therapy [LITT] of lesion or tissue of brain under guidance"
        },
        {
         "code": "17.62",
         "name": "Laser interstitial thermal therapy [LITT] of lesion or tissue of head and neck under guidance"
        },
        {
         "code": "17.63",
         "name": "Laser interstitial thermal therapy [LITT] of lesion or tissue of liver under guidance"
        },
        {
         "code": "17.69",
         "name": "Laser interstitial thermal therapy [LITT] of lesion or tissue of other and unspecified site under guidance"
        },
        {
         "code": "17.70",
         "name": "Intravenous infusion of clofarabine"
        },
        {
         "code": "17.71",
         "name": "Non-coronary intra-operative fluorescence vascular angiography [IFVA]"
        },
        {
         "code": "18.01",
         "name": "Piercing of ear lobe"
        },
        {
         "code": "18.02",
         "name": "Incision of external auditory canal"
        },
        {
         "code": "18.09",
         "name": "Other incision of external ear"
        },
        {
         "code": "18.11",
         "name": "Otoscopy"
        },
        {
         "code": "18.12",
         "name": "Biopsy of external ear"
        },
        {
         "code": "18.19",
         "name": "Other diagnostic procedures on external ear"
        },
        {
         "code": "18.21",
         "name": "Excision of preauricular sinus"
        },
        {
         "code": "18.29",
         "name": "Excision or destruction of other lesion of external ear"
        },
        {
         "code": "18.31",
         "name": "Radical excision of lesion of external ear"
        },
        {
         "code": "18.39",
         "name": "Other excision of external ear"
        },
        {
         "code": "18.4",
         "name": "Suture of laceration of external ear"
        },
        {
         "code": "18.5",
         "name": "Surgical correction of prominent ear"
        },
        {
         "code": "18.6",
         "name": "Reconstruction of external auditory canal"
        },
        {
         "code": "18.71",
         "name": "Construction of auricle of ear"
        },
        {
         "code": "18.72",
         "name": "Reattachment of amputated ear"
        },
        {
         "code": "18.79",
         "name": "Other plastic repair of external ear"
        },
        {
         "code": "18.9",
         "name": "Other operations on external ear"
        },
        {
         "code": "19.0",
         "name": "Stapes mobilization"
        },
        {
         "code": "19.11",
         "name": "Stapedectomy with incus replacement"
        },
        {
         "code": "19.19",
         "name": "Other stapedectomy"
        },
        {
         "code": "19.21",
         "name": "Revision of stapedectomy with incus replacement"
        },
        {
         "code": "19.29",
         "name": "Other revision of stapedectomy"
        },
        {
         "code": "19.3",
         "name": "Other operations on ossicular chain"
        },
        {
         "code": "19.4",
         "name": "Myringoplasty"
        },
        {
         "code": "19.52",
         "name": "Type II tympanoplasty"
        },
        {
         "code": "19.53",
         "name": "Type III tympanoplasty"
        },
        {
         "code": "19.54",
         "name": "Type IV tympanoplasty"
        },
        {
         "code": "19.55",
         "name": "Type V tympanoplasty"
        },
        {
         "code": "19.6",
         "name": "Revision of tympanoplasty"
        },
        {
         "code": "19.9",
         "name": "Other repair of middle ear"
        },
        {
         "code": "20.01",
         "name": "Myringotomy with insertion of tube"
        },
        {
         "code": "20.09",
         "name": "Other myringotomy"
        },
        {
         "code": "20.1",
         "name": "Removal of tympanostomy tube"
        },
        {
         "code": "20.21",
         "name": "Incision of mastoid"
        },
        {
         "code": "20.22",
         "name": "Incision of petrous pyramid air cells"
        },
        {
         "code": "20.23",
         "name": "Incision of middle ear"
        },
        {
         "code": "20.31",
         "name": "Electrocochleography"
        },
        {
         "code": "20.32",
         "name": "Biopsy of middle and inner ear"
        },
        {
         "code": "20.39",
         "name": "Other diagnostic procedures on middle and inner ear"
        },
        {
         "code": "20.41",
         "name": "Simple mastoidectomy"
        },
        {
         "code": "20.42",
         "name": "Radical mastoidectomy"
        },
        {
         "code": "20.49",
         "name": "Other mastoidectomy"
        },
        {
         "code": "20.51",
         "name": "Excision of lesion of middle ear"
        },
        {
         "code": "20.59",
         "name": "Other excision of middle ear"
        },
        {
         "code": "20.61",
         "name": "Fenestration of inner ear (initial)"
        },
        {
         "code": "20.62",
         "name": "Revision of fenestration of inner ear"
        },
        {
         "code": "20.71",
         "name": "Endolymphatic shunt"
        },
        {
         "code": "20.72",
         "name": "Injection into inner ear"
        },
        {
         "code": "20.79",
         "name": "Other incision, excision, and destruction of inner ear"
        },
        {
         "code": "20.8",
         "name": "Operations on eustachian tube"
        },
        {
         "code": "20.91",
         "name": "Tympanosympathectomy"
        },
        {
         "code": "20.92",
         "name": "Revision of mastoidectomy"
        },
        {
         "code": "20.93",
         "name": "Repair of oval and round windows"
        },
        {
         "code": "20.94",
         "name": "Injection of tympanum"
        },
        {
         "code": "20.95",
         "name": "Implantation of electromagnetic hearing device"
        },
        {
         "code": "20.96",
         "name": "Implantation or replacement of cochlear prosthetic device, not otherwise specified"
        },
        {
         "code": "20.97",
         "name": "Implantation or replacement of cochlear prosthetic device, single channel"
        },
        {
         "code": "20.98",
         "name": "Implantation or replacement of cochlear prosthetic device, multiple channel"
        },
        {
         "code": "20.99",
         "name": "Other operations on middle and inner ear"
        },
        {
         "code": "21.00",
         "name": "Control of epistaxis, not otherwise specified"
        },
        {
         "code": "21.01",
         "name": "Control of epistaxis by anterior nasal packing"
        },
        {
         "code": "21.02",
         "name": "Control of epistaxis by posterior (and anterior) packing"
        },
        {
         "code": "21.03",
         "name": "Control of epistaxis by cauterization (and packing)"
        },
        {
         "code": "21.04",
         "name": "Control of epistaxis by ligation of ethmoidal arteries"
        },
        {
         "code": "21.05",
         "name": "Control of epistaxis by (transantral) ligation of the maxillary artery"
        },
        {
         "code": "21.06",
         "name": "Control of epistaxis by ligation of the external carotid artery"
        },
        {
         "code": "21.07",
         "name": "Control of epistaxis by excision of nasal mucosa and skin grafting of septum and lateral nasal wall"
        },
        {
         "code": "21.09",
         "name": "Control of epistaxis by other means"
        },
        {
         "code": "21.1",
         "name": "Incision of nose"
        },
        {
         "code": "21.21",
         "name": "Rhinoscopy"
        },
        {
         "code": "21.22",
         "name": "Biopsy of nose"
        },
        {
         "code": "21.29",
         "name": "Other diagnostic procedures on nose"
        },
        {
         "code": "21.30",
         "name": "Excision or destruction of lesion of nose, not otherwise specified"
        },
        {
         "code": "21.31",
         "name": "Local excision or destruction of intranasal lesion"
        },
        {
         "code": "21.32",
         "name": "Local excision or destruction of other lesion of nose"
        },
        {
         "code": "21.4",
         "name": "Resection of nose"
        },
        {
         "code": "21.5",
         "name": "Submucous resection of nasal septum"
        },
        {
         "code": "21.61",
         "name": "Turbinectomy by diathermy or cryosurgery"
        },
        {
         "code": "21.62",
         "name": "Fracture of the turbinates"
        },
        {
         "code": "21.69",
         "name": "Other turbinectomy"
        },
        {
         "code": "21.71",
         "name": "Closed reduction of nasal fracture"
        },
        {
         "code": "21.72",
         "name": "Open reduction of nasal fracture"
        },
        {
         "code": "21.81",
         "name": "Suture of laceration of nose"
        },
        {
         "code": "21.82",
         "name": "Closure of nasal fistula"
        },
        {
         "code": "21.83",
         "name": "Total nasal reconstruction"
        },
        {
         "code": "21.84",
         "name": "Revision rhinoplasty"
        },
        {
         "code": "21.85",
         "name": "Augmentation rhinoplasty"
        },
        {
         "code": "21.86",
         "name": "Limited rhinoplasty"
        },
        {
         "code": "21.87",
         "name": "Other rhinoplasty"
        },
        {
         "code": "21.88",
         "name": "Other septoplasty"
        },
        {
         "code": "21.89",
         "name": "Other repair and plastic operations on nose"
        },
        {
         "code": "21.91",
         "name": "Lysis of adhesions of nose"
        },
        {
         "code": "21.99",
         "name": "Other operations on nose"
        },
        {
         "code": "22.00",
         "name": "Aspiration and lavage of nasal sinus, not otherwise specified"
        },
        {
         "code": "22.01",
         "name": "Puncture of nasal sinus for aspiration or lavage"
        },
        {
         "code": "22.02",
         "name": "Aspiration or lavage of nasal sinus through natural ostium"
        },
        {
         "code": "22.11",
         "name": "Closed [endoscopic] [needle] biopsy of nasal sinus"
        },
        {
         "code": "22.12",
         "name": "Open biopsy of nasal sinus"
        },
        {
         "code": "22.19",
         "name": "Other diagnostic procedures on nasal sinuses"
        },
        {
         "code": "22.2",
         "name": "Intranasal antrotomy"
        },
        {
         "code": "22.31",
         "name": "Radical maxillary antrotomy"
        },
        {
         "code": "22.39",
         "name": "Other external maxillary antrotomy"
        },
        {
         "code": "22.41",
         "name": "Frontal sinusotomy"
        },
        {
         "code": "22.42",
         "name": "Frontal sinusectomy"
        },
        {
         "code": "22.50",
         "name": "Sinusotomy, not otherwise specified"
        },
        {
         "code": "22.51",
         "name": "Ethmoidotomy"
        },
        {
         "code": "22.52",
         "name": "Sphenoidotomy"
        },
        {
         "code": "22.53",
         "name": "Incision of multiple nasal sinuses"
        },
        {
         "code": "22.60",
         "name": "Sinusectomy, not otherwise specified"
        },
        {
         "code": "22.61",
         "name": "Excision of lesion of maxillary sinus with Caldwell-Luc approach"
        },
        {
         "code": "22.62",
         "name": "Excision of lesion of maxillary sinus with other approach"
        },
        {
         "code": "22.63",
         "name": "Ethmoidectomy"
        },
        {
         "code": "22.64",
         "name": "Sphenoidectomy"
        },
        {
         "code": "22.71",
         "name": "Closure of nasal sinus fistula"
        },
        {
         "code": "22.79",
         "name": "Other repair of nasal sinus"
        },
        {
         "code": "22.9",
         "name": "Other operations on nasal sinuses"
        },
        {
         "code": "23.01",
         "name": "Extraction of deciduous tooth"
        },
        {
         "code": "23.09",
         "name": "Extraction of other tooth"
        },
        {
         "code": "23.11",
         "name": "Removal of residual root"
        },
        {
         "code": "23.19",
         "name": "Other surgical extraction of tooth"
        },
        {
         "code": "23.2",
         "name": "Restoration of tooth by filling"
        },
        {
         "code": "23.3",
         "name": "Restoration of tooth by inlay"
        },
        {
         "code": "23.41",
         "name": "Application of crown"
        },
        {
         "code": "23.42",
         "name": "Insertion of fixed bridge"
        },
        {
         "code": "23.43",
         "name": "Insertion of removable bridge"
        },
        {
         "code": "23.49",
         "name": "Other dental restoration"
        },
        {
         "code": "23.5",
         "name": "Implantation of tooth"
        },
        {
         "code": "23.6",
         "name": "Prosthetic dental implant"
        },
        {
         "code": "23.70",
         "name": "Root canal, not otherwise specified"
        },
        {
         "code": "23.71",
         "name": "Root canal therapy with irrigation"
        },
        {
         "code": "23.72",
         "name": "Root canal therapy with apicoectomy"
        },
        {
         "code": "23.73",
         "name": "Apicoectomy"
        },
        {
         "code": "24.0",
         "name": "Incision of gum or alveolar bone"
        },
        {
         "code": "24.11",
         "name": "Biopsy of gum"
        },
        {
         "code": "24.12",
         "name": "Biopsy of alveolus"
        },
        {
         "code": "24.19",
         "name": "Other diagnostic procedures on teeth, gums, and alveoli"
        },
        {
         "code": "24.2",
         "name": "Gingivoplasty"
        },
        {
         "code": "24.31",
         "name": "Excision of lesion or tissue of gum"
        },
        {
         "code": "24.32",
         "name": "Suture of laceration of gum"
        },
        {
         "code": "24.39",
         "name": "Other operations on gum"
        },
        {
         "code": "24.4",
         "name": "Excision of dental lesion of jaw"
        },
        {
         "code": "24.5",
         "name": "Alveoloplasty"
        },
        {
         "code": "24.6",
         "name": "Exposure of tooth"
        },
        {
         "code": "24.7",
         "name": "Application of orthodontic appliance"
        },
        {
         "code": "24.8",
         "name": "Other orthodontic operation"
        },
        {
         "code": "24.91",
         "name": "Extension or deepening of buccolabial or lingual sulcus"
        },
        {
         "code": "24.99",
         "name": "Other dental operations"
        },
        {
         "code": "25.01",
         "name": "Closed [needle] biopsy of tongue"
        },
        {
         "code": "25.02",
         "name": "Open biopsy of tongue"
        },
        {
         "code": "25.09",
         "name": "Other diagnostic procedures on tongue"
        },
        {
         "code": "25.1",
         "name": "Excision or destruction of lesion or tissue of tongue"
        },
        {
         "code": "25.2",
         "name": "Partial glossectomy"
        },
        {
         "code": "25.3",
         "name": "Complete glossectomy"
        },
        {
         "code": "25.4",
         "name": "Radical glossectomy"
        },
        {
         "code": "25.51",
         "name": "Suture of laceration of tongue"
        },
        {
         "code": "25.59",
         "name": "Other repair and plastic operations on tongue"
        },
        {
         "code": "25.91",
         "name": "Lingual frenotomy"
        },
        {
         "code": "25.92",
         "name": "Lingual frenectomy"
        },
        {
         "code": "25.93",
         "name": "Lysis of adhesions of tongue"
        },
        {
         "code": "25.94",
         "name": "Other glossotomy"
        },
        {
         "code": "25.99",
         "name": "Other operations on tongue"
        },
        {
         "code": "26.0",
         "name": "Incision of salivary gland or duct"
        },
        {
         "code": "26.11",
         "name": "Closed [needle] biopsy of salivary gland or duct"
        },
        {
         "code": "26.12",
         "name": "Open biopsy of salivary gland or duct"
        },
        {
         "code": "26.19",
         "name": "Other diagnostic procedures on salivary glands and ducts"
        },
        {
         "code": "26.21",
         "name": "Marsupialization of salivary gland cyst"
        },
        {
         "code": "26.29",
         "name": "Other excision of salivary gland lesion"
        },
        {
         "code": "26.30",
         "name": "Sialoadenectomy, not otherwise specified"
        },
        {
         "code": "26.31",
         "name": "Partial sialoadenectomy"
        },
        {
         "code": "26.32",
         "name": "Complete sialoadenectomy"
        },
        {
         "code": "26.41",
         "name": "Suture of laceration of salivary gland"
        },
        {
         "code": "26.42",
         "name": "Closure of salivary fistula"
        },
        {
         "code": "26.49",
         "name": "Other repair and plastic operations on salivary gland or duct"
        },
        {
         "code": "26.91",
         "name": "Probing of salivary duct"
        },
        {
         "code": "26.99",
         "name": "Other operations on salivary gland or duct"
        },
        {
         "code": "27.0",
         "name": "Drainage of face and floor of mouth"
        },
        {
         "code": "27.1",
         "name": "Incision of palate"
        },
        {
         "code": "27.21",
         "name": "Biopsy of bony palate"
        },
        {
         "code": "27.22",
         "name": "Biopsy of uvula and soft palate"
        },
        {
         "code": "27.23",
         "name": "Biopsy of lip"
        },
        {
         "code": "27.24",
         "name": "Biopsy of mouth, unspecified structure"
        },
        {
         "code": "27.29",
         "name": "Other diagnostic procedures on oral cavity"
        },
        {
         "code": "27.31",
         "name": "Local excision or destruction of lesion or tissue of bony palate"
        },
        {
         "code": "27.32",
         "name": "Wide excision or destruction of lesion or tissue of bony palate"
        },
        {
         "code": "27.41",
         "name": "Labial frenectomy"
        },
        {
         "code": "27.42",
         "name": "Wide excision of lesion of lip"
        },
        {
         "code": "27.43",
         "name": "Other excision of lesion or tissue of lip"
        },
        {
         "code": "27.49",
         "name": "Other excision of mouth"
        },
        {
         "code": "27.51",
         "name": "Suture of laceration of lip"
        },
        {
         "code": "27.52",
         "name": "Suture of laceration of other part of mouth"
        },
        {
         "code": "27.53",
         "name": "Closure of fistula of mouth"
        },
        {
         "code": "27.54",
         "name": "Repair of cleft lip"
        },
        {
         "code": "27.55",
         "name": "Full-thickness skin graft to lip and mouth"
        },
        {
         "code": "27.56",
         "name": "Other skin graft to lip and mouth"
        },
        {
         "code": "27.57",
         "name": "Attachment of pedicle or flap graft to lip and mouth"
        },
        {
         "code": "27.59",
         "name": "Other plastic repair of mouth"
        },
        {
         "code": "27.61",
         "name": "Suture of laceration of palate"
        },
        {
         "code": "27.62",
         "name": "Correction of cleft palate"
        },
        {
         "code": "27.63",
         "name": "Revision of cleft palate repair"
        },
        {
         "code": "27.64",
         "name": "Insertion of palatal implant"
        },
        {
         "code": "27.69",
         "name": "Other plastic repair of palate"
        },
        {
         "code": "27.71",
         "name": "Incision of uvula"
        },
        {
         "code": "27.72",
         "name": "Excision of uvula"
        },
        {
         "code": "27.73",
         "name": "Repair of uvula"
        },
        {
         "code": "27.79",
         "name": "Other operations on uvula"
        },
        {
         "code": "27.91",
         "name": "Labial frenotomy"
        },
        {
         "code": "27.92",
         "name": "Incision of mouth, unspecified structure"
        },
        {
         "code": "27.99",
         "name": "Other operations on oral cavity"
        },
        {
         "code": "28.0",
         "name": "Incision and drainage of tonsil and peritonsillar structures"
        },
        {
         "code": "28.11",
         "name": "Biopsy of tonsils and adenoids"
        },
        {
         "code": "28.19",
         "name": "Other diagnostic procedures on tonsils and adenoids"
        },
        {
         "code": "28.2",
         "name": "Tonsillectomy without adenoidectomy"
        },
        {
         "code": "28.3",
         "name": "Tonsillectomy with adenoidectomy"
        },
        {
         "code": "28.4",
         "name": "Excision of tonsil tag"
        },
        {
         "code": "28.5",
         "name": "Excision of lingual tonsil"
        },
        {
         "code": "28.6",
         "name": "Adenoidectomy without tonsillectomy"
        },
        {
         "code": "28.7",
         "name": "Control of hemorrhage after tonsillectomy and adenoidectomy"
        },
        {
         "code": "28.91",
         "name": "Removal of foreign body from tonsil and adenoid by incision"
        },
        {
         "code": "28.92",
         "name": "Excision of lesion of tonsil and adenoid"
        },
        {
         "code": "28.99",
         "name": "Other operations on tonsils and adenoids"
        },
        {
         "code": "29.0",
         "name": "Pharyngotomy"
        },
        {
         "code": "29.11",
         "name": "Pharyngoscopy"
        },
        {
         "code": "29.12",
         "name": "Pharyngeal biopsy"
        },
        {
         "code": "29.19",
         "name": "Other diagnostic procedures on pharynx"
        },
        {
         "code": "29.2",
         "name": "Excision of branchial cleft cyst or vestige"
        },
        {
         "code": "29.31",
         "name": "Cricopharyngeal myotomy"
        },
        {
         "code": "29.32",
         "name": "Pharyngeal diverticulectomy"
        },
        {
         "code": "29.33",
         "name": "Pharyngectomy (partial)"
        },
        {
         "code": "29.39",
         "name": "Other excision or destruction of lesion or tissue of pharynx"
        },
        {
         "code": "29.4",
         "name": "Plastic operation on pharynx"
        },
        {
         "code": "29.51",
         "name": "Suture of laceration of pharynx"
        },
        {
         "code": "29.52",
         "name": "Closure of branchial cleft fistula"
        },
        {
         "code": "29.53",
         "name": "Closure of other fistula of pharynx"
        },
        {
         "code": "29.54",
         "name": "Lysis of pharyngeal adhesions"
        },
        {
         "code": "29.59",
         "name": "Other repair of pharynx"
        },
        {
         "code": "29.91",
         "name": "Dilation of pharynx"
        },
        {
         "code": "29.92",
         "name": "Division of glossopharyngeal nerve"
        },
        {
         "code": "29.99",
         "name": "Other operations on pharynx"
        },
        {
         "code": "30.01",
         "name": "Marsupialization of laryngeal cyst"
        },
        {
         "code": "30.09",
         "name": "Other excision or destruction of lesion or tissue of larynx"
        },
        {
         "code": "30.1",
         "name": "Hemilaryngectomy"
        },
        {
         "code": "30.21",
         "name": "Epiglottidectomy"
        },
        {
         "code": "30.22",
         "name": "Vocal cordectomy"
        },
        {
         "code": "30.29",
         "name": "Other partial laryngectomy"
        },
        {
         "code": "30.3",
         "name": "Complete laryngectomy"
        },
        {
         "code": "30.4",
         "name": "Radical laryngectomy"
        },
        {
         "code": "31.0",
         "name": "Injection of larynx"
        },
        {
         "code": "31.1",
         "name": "Temporary tracheostomy"
        },
        {
         "code": "31.21",
         "name": "Mediastinal tracheostomy"
        },
        {
         "code": "31.29",
         "name": "Other permanent tracheostomy"
        },
        {
         "code": "31.3",
         "name": "Other incision of larynx or trachea"
        },
        {
         "code": "31.41",
         "name": "Tracheoscopy through artificial stoma"
        },
        {
         "code": "31.42",
         "name": "Laryngoscopy and other tracheoscopy"
        },
        {
         "code": "31.43",
         "name": "Closed [endoscopic] biopsy of larynx"
        },
        {
         "code": "31.44",
         "name": "Closed [endoscopic] biopsy of trachea"
        },
        {
         "code": "31.45",
         "name": "Open biopsy of larynx or trachea"
        },
        {
         "code": "31.48",
         "name": "Other diagnostic procedures on larynx"
        },
        {
         "code": "31.49",
         "name": "Other diagnostic procedures on trachea"
        },
        {
         "code": "31.5",
         "name": "Local excision or destruction of lesion or tissue of trachea"
        },
        {
         "code": "31.61",
         "name": "Suture of laceration of larynx"
        },
        {
         "code": "31.62",
         "name": "Closure of fistula of larynx"
        },
        {
         "code": "31.63",
         "name": "Revision of laryngostomy"
        },
        {
         "code": "31.64",
         "name": "Repair of laryngeal fracture"
        },
        {
         "code": "31.69",
         "name": "Other repair of larynx"
        },
        {
         "code": "31.71",
         "name": "Suture of laceration of trachea"
        },
        {
         "code": "31.72",
         "name": "Closure of external fistula of trachea"
        },
        {
         "code": "31.73",
         "name": "Closure of other fistula of trachea"
        },
        {
         "code": "31.74",
         "name": "Revision of tracheostomy"
        },
        {
         "code": "31.75",
         "name": "Reconstruction of trachea and construction of artificial larynx"
        },
        {
         "code": "31.79",
         "name": "Other repair and plastic operations on trachea"
        },
        {
         "code": "31.91",
         "name": "Division of laryngeal nerve"
        },
        {
         "code": "31.92",
         "name": "Lysis of adhesions of trachea or larynx"
        },
        {
         "code": "31.93",
         "name": "Replacement of laryngeal or tracheal stent"
        },
        {
         "code": "31.94",
         "name": "Injection of locally-acting therapeutic substance into trachea"
        },
        {
         "code": "31.95",
         "name": "Tracheoesophageal fistulization"
        },
        {
         "code": "31.98",
         "name": "Other operations on larynx"
        },
        {
         "code": "31.99",
         "name": "Other operations on trachea"
        },
        {
         "code": "32.01",
         "name": "Endoscopic excision or destruction of lesion or tissue of bronchus"
        },
        {
         "code": "32.09",
         "name": "Other local excision or destruction of lesion or tissue of bronchus"
        },
        {
         "code": "32.1",
         "name": "Other excision of bronchus"
        },
        {
         "code": "32.20",
         "name": "Thoracoscopic excision of lesion or tissue of lung"
        },
        {
         "code": "32.21",
         "name": "Plication of emphysematous bleb"
        },
        {
         "code": "32.22",
         "name": "Lung volume reduction surgery"
        },
        {
         "code": "32.23",
         "name": "Open ablation of lung lesion or tissue"
        },
        {
         "code": "32.24",
         "name": "Percutaneous ablation of lung lesion or tissue"
        },
        {
         "code": "32.25",
         "name": "Thoracoscopic ablation of lung lesion or tissue"
        },
        {
         "code": "32.26",
         "name": "Other and unspecified ablation of lung lesion or tissue"
        },
        {
         "code": "32.27",
         "name": "Bronchoscopic bronchial thermoplasty, ablation of airway smooth muscle"
        },
        {
         "code": "32.28",
         "name": "Endoscopic excision or destruction of lesion or tissue of lung"
        },
        {
         "code": "32.29",
         "name": "Other local excision or destruction of lesion or tissue of lung"
        },
        {
         "code": "32.30",
         "name": "Thoracoscopic segmental resection of lung"
        },
        {
         "code": "32.39",
         "name": "Other and unspecified segmental resection of lung"
        },
        {
         "code": "32.41",
         "name": "Thoracoscopic lobectomy of lung"
        },
        {
         "code": "32.49",
         "name": "Other lobectomy of lung"
        },
        {
         "code": "32.50",
         "name": "Thoracoscopic pneumonectomy"
        },
        {
         "code": "32.59",
         "name": "Other and unspecified pneumonectomy"
        },
        {
         "code": "32.6",
         "name": "Radical dissection of thoracic structures"
        },
        {
         "code": "32.9",
         "name": "Other excision of lung"
        },
        {
         "code": "33.0",
         "name": "Incision of bronchus"
        },
        {
         "code": "33.1",
         "name": "Incision of lung"
        },
        {
         "code": "33.20",
         "name": "Thoracoscopic lung biopsy"
        },
        {
         "code": "33.21",
         "name": "Bronchoscopy through artificial stoma"
        },
        {
         "code": "33.22",
         "name": "Fiber-optic bronchoscopy"
        },
        {
         "code": "33.23",
         "name": "Other bronchoscopy"
        },
        {
         "code": "33.24",
         "name": "Closed [endoscopic] biopsy of bronchus"
        },
        {
         "code": "33.25",
         "name": "Open biopsy of bronchus"
        },
        {
         "code": "33.26",
         "name": "Closed [percutaneous] [needle] biopsy of lung"
        },
        {
         "code": "33.27",
         "name": "Closed endoscopic biopsy of lung"
        },
        {
         "code": "33.28",
         "name": "Open biopsy of lung"
        },
        {
         "code": "33.29",
         "name": "Other diagnostic procedures on lung or bronchus"
        },
        {
         "code": "33.31",
         "name": "Destruction of phrenic nerve for collapse of lung"
        },
        {
         "code": "33.32",
         "name": "Artificial pneumothorax for collapse of lung"
        },
        {
         "code": "33.33",
         "name": "Pneumoperitoneum for collapse of lung"
        },
        {
         "code": "33.34",
         "name": "Thoracoplasty"
        },
        {
         "code": "33.39",
         "name": "Other surgical collapse of lung"
        },
        {
         "code": "33.41",
         "name": "Suture of laceration of bronchus"
        },
        {
         "code": "33.42",
         "name": "Closure of bronchial fistula"
        },
        {
         "code": "33.43",
         "name": "Closure of laceration of lung"
        },
        {
         "code": "33.48",
         "name": "Other repair and plastic operations on bronchus"
        },
        {
         "code": "33.49",
         "name": "Other repair and plastic operations on lung"
        },
        {
         "code": "33.50",
         "name": "Lung transplantation, not otherwise specified"
        },
        {
         "code": "33.51",
         "name": "Unilateral lung transplantation"
        },
        {
         "code": "33.52",
         "name": "Bilateral lung transplantation"
        },
        {
         "code": "33.6",
         "name": "Combined heart-lung transplantation"
        },
        {
         "code": "33.71",
         "name": "Endoscopic insertion or replacement of bronchial valve(s), single lobe"
        },
        {
         "code": "33.72",
         "name": "Endoscopic pulmonary airway flow measurement"
        },
        {
         "code": "33.73",
         "name": "Endoscopic insertion or replacement of bronchial valve(s), multiple lobes"
        },
        {
         "code": "33.78",
         "name": "Endoscopic removal of bronchial device(s) or substances"
        },
        {
         "code": "33.79",
         "name": "Endoscopic insertion of other bronchial device or substances"
        },
        {
         "code": "33.91",
         "name": "Bronchial dilation"
        },
        {
         "code": "33.92",
         "name": "Ligation of bronchus"
        },
        {
         "code": "33.93",
         "name": "Puncture of lung"
        },
        {
         "code": "33.98",
         "name": "Other operations on bronchus"
        },
        {
         "code": "33.99",
         "name": "Other operations on lung"
        },
        {
         "code": "34.01",
         "name": "Incision of chest wall"
        },
        {
         "code": "34.02",
         "name": "Exploratory thoracotomy"
        },
        {
         "code": "34.03",
         "name": "Reopening of recent thoracotomy site"
        },
        {
         "code": "34.04",
         "name": "Insertion of intercostal catheter for drainage"
        },
        {
         "code": "34.05",
         "name": "Creation of pleuroperitoneal shunt"
        },
        {
         "code": "34.06",
         "name": "Thoracoscopic drainage of pleural cavity"
        },
        {
         "code": "34.09",
         "name": "Other incision of pleura"
        },
        {
         "code": "34.1",
         "name": "Incision of mediastinum"
        },
        {
         "code": "34.20",
         "name": "Thoracoscopic pleural biopsy"
        },
        {
         "code": "34.21",
         "name": "Transpleural thoracoscopy"
        },
        {
         "code": "34.22",
         "name": "Mediastinoscopy"
        },
        {
         "code": "34.23",
         "name": "Biopsy of chest wall"
        },
        {
         "code": "34.24",
         "name": "Other pleural biopsy"
        },
        {
         "code": "34.25",
         "name": "Closed [percutaneous] [needle] biopsy of mediastinum"
        },
        {
         "code": "34.26",
         "name": "Open mediastinal biopsy"
        },
        {
         "code": "34.27",
         "name": "Biopsy of diaphragm"
        },
        {
         "code": "34.28",
         "name": "Other diagnostic procedures on chest wall, pleura, and diaphragm"
        },
        {
         "code": "34.29",
         "name": "Other diagnostic procedures on mediastinum"
        },
        {
         "code": "34.3",
         "name": "Excision or destruction of lesion or tissue of mediastinum"
        },
        {
         "code": "34.4",
         "name": "Excision or destruction of lesion of chest wall"
        },
        {
         "code": "34.51",
         "name": "Decortication of lung"
        },
        {
         "code": "34.52",
         "name": "Thoracoscopic decortication of lung"
        },
        {
         "code": "34.59",
         "name": "Other excision of pleura"
        },
        {
         "code": "34.6",
         "name": "Scarification of pleura"
        },
        {
         "code": "34.71",
         "name": "Suture of laceration of chest wall"
        },
        {
         "code": "34.72",
         "name": "Closure of thoracostomy"
        },
        {
         "code": "34.73",
         "name": "Closure of other fistula of thorax"
        },
        {
         "code": "34.74",
         "name": "Repair of pectus deformity"
        },
        {
         "code": "34.79",
         "name": "Other repair of chest wall"
        },
        {
         "code": "34.81",
         "name": "Excision of lesion or tissue of diaphragm"
        },
        {
         "code": "34.82",
         "name": "Suture of laceration of diaphragm"
        },
        {
         "code": "34.83",
         "name": "Closure of fistula of diaphragm"
        },
        {
         "code": "34.84",
         "name": "Other repair of diaphragm"
        },
        {
         "code": "34.85",
         "name": "Implantation of diaphragmatic pacemaker"
        },
        {
         "code": "34.89",
         "name": "Other operations on diaphragm"
        },
        {
         "code": "34.91",
         "name": "Thoracentesis"
        },
        {
         "code": "34.92",
         "name": "Injection into thoracic cavity"
        },
        {
         "code": "34.93",
         "name": "Repair of pleura"
        },
        {
         "code": "34.99",
         "name": "Other operations on thorax"
        },
        {
         "code": "35.00",
         "name": "Closed heart valvotomy, unspecified valve"
        },
        {
         "code": "35.01",
         "name": "Closed heart valvotomy, aortic valve"
        },
        {
         "code": "35.02",
         "name": "Closed heart valvotomy, mitral valve"
        },
        {
         "code": "35.03",
         "name": "Closed heart valvotomy, pulmonary valve"
        },
        {
         "code": "35.04",
         "name": "Closed heart valvotomy, tricuspid valve"
        },
        {
         "code": "35.10",
         "name": "Open heart valvuloplasty without replacement, unspecified valve"
        },
        {
         "code": "35.11",
         "name": "Open heart valvuloplasty of aortic valve without replacement"
        },
        {
         "code": "35.12",
         "name": "Open heart valvuloplasty of mitral valve without replacement"
        },
        {
         "code": "35.13",
         "name": "Open heart valvuloplasty of pulmonary valve without replacement"
        },
        {
         "code": "35.14",
         "name": "Open heart valvuloplasty of tricuspid valve without replacement"
        },
        {
         "code": "35.20",
         "name": "Replacement of unspecified heart valve"
        },
        {
         "code": "35.21",
         "name": "Replacement of aortic valve with tissue graft"
        },
        {
         "code": "35.22",
         "name": "Other replacement of aortic valve"
        },
        {
         "code": "35.23",
         "name": "Replacement of mitral valve with tissue graft"
        },
        {
         "code": "35.24",
         "name": "Other replacement of mitral valve"
        },
        {
         "code": "35.25",
         "name": "Replacement of pulmonary valve with tissue graft"
        },
        {
         "code": "35.26",
         "name": "Other replacement of pulmonary valve"
        },
        {
         "code": "35.27",
         "name": "Replacement of tricuspid valve with tissue graft"
        },
        {
         "code": "35.28",
         "name": "Other replacement of tricuspid valve"
        },
        {
         "code": "35.31",
         "name": "Operations on papillary muscle"
        },
        {
         "code": "35.32",
         "name": "Operations on chordae tendineae"
        },
        {
         "code": "35.33",
         "name": "Annuloplasty"
        },
        {
         "code": "35.34",
         "name": "Infundibulectomy"
        },
        {
         "code": "35.35",
         "name": "Operations on trabeculae carneae cordis"
        },
        {
         "code": "35.39",
         "name": "Operations on other structures adjacent to valves of heart"
        },
        {
         "code": "35.41",
         "name": "Enlargement of existing atrial septal defect"
        },
        {
         "code": "35.42",
         "name": "Creation of septal defect in heart"
        },
        {
         "code": "35.50",
         "name": "Repair of unspecified septal defect of heart with prosthesis"
        },
        {
         "code": "35.51",
         "name": "Repair of atrial septal defect with prosthesis, open technique"
        },
        {
         "code": "35.52",
         "name": "Repair of atrial septal defect with prosthesis, closed technique"
        },
        {
         "code": "35.53",
         "name": "Repair of ventricular septal defect with prosthesis, open technique"
        },
        {
         "code": "35.54",
         "name": "Repair of endocardial cushion defect with prosthesis"
        },
        {
         "code": "35.55",
         "name": "Repair of ventricular septal defect with prosthesis, closed technique"
        },
        {
         "code": "35.60",
         "name": "Repair of unspecified septal defect of heart with tissue graft"
        },
        {
         "code": "35.61",
         "name": "Repair of atrial septal defect with tissue graft"
        },
        {
         "code": "35.62",
         "name": "Repair of ventricular septal defect with tissue graft"
        },
        {
         "code": "35.63",
         "name": "Repair of endocardial cushion defect with tissue graft"
        },
        {
         "code": "35.70",
         "name": "Other and unspecified repair of unspecified septal defect of heart"
        },
        {
         "code": "35.71",
         "name": "Other and unspecified repair of atrial septal defect"
        },
        {
         "code": "35.72",
         "name": "Other and unspecified repair of ventricular septal defect"
        },
        {
         "code": "35.73",
         "name": "Other and unspecified repair of endocardial cushion defect"
        },
        {
         "code": "35.81",
         "name": "Total repair of tetralogy of fallot"
        },
        {
         "code": "35.82",
         "name": "Total repair of total anomalous pulmonary venous connection"
        },
        {
         "code": "35.83",
         "name": "Total repair of truncus arteriosus"
        },
        {
         "code": "35.84",
         "name": "Total correction of transposition of great vessels, not elsewhere classified"
        },
        {
         "code": "35.91",
         "name": "Interatrial transposition of venous return"
        },
        {
         "code": "35.92",
         "name": "Creation of conduit between right ventricle and pulmonary artery"
        },
        {
         "code": "35.93",
         "name": "Creation of conduit between left ventricle and aorta"
        },
        {
         "code": "35.94",
         "name": "Creation of conduit between atrium and pulmonary artery"
        },
        {
         "code": "35.95",
         "name": "Revision of corrective procedure on heart"
        },
        {
         "code": "35.96",
         "name": "Percutaneous balloon valvuloplasty"
        },
        {
         "code": "35.97",
         "name": "Percutaneous mitral valve repair with implant"
        },
        {
         "code": "35.98",
         "name": "Other operations on septa of heart"
        },
        {
         "code": "35.99",
         "name": "Other operations on valves of heart"
        },
        {
         "code": "36.03",
         "name": "Open chest coronary artery angioplasty"
        },
        {
         "code": "36.04",
         "name": "Intracoronary artery thrombolytic infusion"
        },
        {
         "code": "36.06",
         "name": "Insertion of non-drug-eluting coronary artery stent(s)"
        },
        {
         "code": "36.07",
         "name": "Insertion of drug-eluting coronary artery stent(s)"
        },
        {
         "code": "36.09",
         "name": "Other removal of coronary artery obstruction"
        },
        {
         "code": "36.10",
         "name": "Aortocoronary bypass for heart revascularization, not otherwise specified"
        },
        {
         "code": "36.11",
         "name": "(Aorto)coronary bypass of one coronary artery"
        },
        {
         "code": "36.12",
         "name": "(Aorto)coronary bypass of two coronary arteries"
        },
        {
         "code": "36.13",
         "name": "(Aorto)coronary bypass of three coronary arteries"
        },
        {
         "code": "36.14",
         "name": "(Aorto)coronary bypass of four or more coronary arteries"
        },
        {
         "code": "36.15",
         "name": "Single internal mammary-coronary artery bypass"
        },
        {
         "code": "36.16",
         "name": "Double internal mammary-coronary artery bypass"
        },
        {
         "code": "36.17",
         "name": "Abdominal-coronary artery bypass"
        },
        {
         "code": "36.19",
         "name": "Other bypass anastomosis for heart revascularization"
        },
        {
         "code": "36.2",
         "name": "Heart revascularization by arterial implant"
        },
        {
         "code": "36.31",
         "name": "Open chest transmyocardial revascularization"
        },
        {
         "code": "36.32",
         "name": "Other transmyocardial revascularization"
        },
        {
         "code": "36.33",
         "name": "Endoscopic transmyocardial revascularization"
        },
        {
         "code": "36.34",
         "name": "Percutaneous transmyocardial revascularization"
        },
        {
         "code": "36.39",
         "name": "Other heart revascularization"
        },
        {
         "code": "36.91",
         "name": "Repair of aneurysm of coronary vessel"
        },
        {
         "code": "36.99",
         "name": "Other operations on vessels of heart"
        },
        {
         "code": "37.0",
         "name": "Pericardiocentesis"
        },
        {
         "code": "37.10",
         "name": "Incision of heart, not otherwise specified"
        },
        {
         "code": "37.11",
         "name": "Cardiotomy"
        },
        {
         "code": "37.12",
         "name": "Pericardiotomy"
        },
        {
         "code": "37.20",
         "name": "Noninvasive programmed electrical stimulation [NIPS]"
        },
        {
         "code": "37.21",
         "name": "Right heart cardiac catheterization"
        },
        {
         "code": "37.22",
         "name": "Left heart cardiac catheterization"
        },
        {
         "code": "37.23",
         "name": "Combined right and left heart cardiac catheterization"
        },
        {
         "code": "37.24",
         "name": "Biopsy of pericardium"
        },
        {
         "code": "37.25",
         "name": "Biopsy of heart"
        },
        {
         "code": "37.26",
         "name": "Catheter based invasive electrophysiologic testing"
        },
        {
         "code": "37.27",
         "name": "Cardiac mapping"
        },
        {
         "code": "37.28",
         "name": "Intracardiac echocardiography"
        },
        {
         "code": "37.29",
         "name": "Other diagnostic procedures on heart and pericardium"
        },
        {
         "code": "37.31",
         "name": "Pericardiectomy"
        },
        {
         "code": "37.32",
         "name": "Excision of aneurysm of heart"
        },
        {
         "code": "37.33",
         "name": "Excision or destruction of other lesion or tissue of heart, open approach"
        },
        {
         "code": "37.34",
         "name": "Excision or destruction of other lesion or tissue of heart, endovascular approach"
        },
        {
         "code": "37.35",
         "name": "Partial ventriculectomy"
        },
        {
         "code": "37.36",
         "name": "Excision or destruction of left atrial appendage (LAA)"
        },
        {
         "code": "37.37",
         "name": "Excision or destruction of other lesion or tissue of heart, thoracoscopic approach"
        },
        {
         "code": "37.41",
         "name": "Implantation of prosthetic cardiac support device around the heart"
        },
        {
         "code": "37.49",
         "name": "Other repair of heart and pericardium"
        },
        {
         "code": "37.51",
         "name": "Heart transplantation"
        },
        {
         "code": "37.52",
         "name": "Implantation of total internal biventricular heart replacement system"
        },
        {
         "code": "37.53",
         "name": "Replacement or repair of thoracic unit of (total) replacement heart system"
        },
        {
         "code": "37.54",
         "name": "Replacement or repair of other implantable component of (total) replacement heart system"
        },
        {
         "code": "37.55",
         "name": "Removal of internal biventricular heart replacement system"
        },
        {
         "code": "37.60",
         "name": "Implantation or insertion of biventricular external heart assist system"
        },
        {
         "code": "37.61",
         "name": "Implant of pulsation balloon"
        },
        {
         "code": "37.62",
         "name": "Insertion of temporary non-implantable extracorporeal circulatory assist device"
        },
        {
         "code": "37.63",
         "name": "Repair of heart assist system"
        },
        {
         "code": "37.64",
         "name": "Removal of external heart assist system(s) or device(s)"
        },
        {
         "code": "37.65",
         "name": "Implant of single ventricular (extracorporeal) external heart assist system"
        },
        {
         "code": "37.66",
         "name": "Insertion of implantable heart assist system"
        },
        {
         "code": "37.67",
         "name": "Implantation of cardiomyostimulation system"
        },
        {
         "code": "37.68",
         "name": "Insertion of percutaneous external heart assist device"
        },
        {
         "code": "37.70",
         "name": "Initial insertion of lead [electrode], not otherwise specified"
        },
        {
         "code": "37.71",
         "name": "Initial insertion of transvenous lead [electrode] into ventricle"
        },
        {
         "code": "37.72",
         "name": "Initial insertion of transvenous leads [electrodes] into atrium and ventricle"
        },
        {
         "code": "37.73",
         "name": "Initial insertion of transvenous lead [electrode] into atrium"
        },
        {
         "code": "37.74",
         "name": "Insertion or replacement of epicardial lead [electrode] into epicardium"
        },
        {
         "code": "37.75",
         "name": "Revision of lead [electrode]"
        },
        {
         "code": "37.76",
         "name": "Replacement of transvenous atrial and\/or ventricular lead(s) [electrode]"
        },
        {
         "code": "37.77",
         "name": "Removal of lead(s) [electrode] without replacement"
        },
        {
         "code": "37.78",
         "name": "Insertion of temporary transvenous pacemaker system"
        },
        {
         "code": "37.79",
         "name": "Revision or relocation of cardiac device pocket"
        },
        {
         "code": "37.80",
         "name": "Insertion of permanent pacemaker, initial or replacement, type of device not specified"
        },
        {
         "code": "37.81",
         "name": "Initial insertion of single-chamber device, not specified as rate responsive"
        },
        {
         "code": "37.82",
         "name": "Initial insertion of single-chamber device, rate responsive"
        },
        {
         "code": "37.83",
         "name": "Initial insertion of dual-chamber device"
        },
        {
         "code": "37.85",
         "name": "Replacement of any type pacemaker device with single-chamber device, not specified as rate responsive"
        },
        {
         "code": "37.86",
         "name": "Replacement of any type of pacemaker device with single-chamber device, rate responsive"
        },
        {
         "code": "37.87",
         "name": "Replacement of any type pacemaker device with dual-chamber device"
        },
        {
         "code": "37.89",
         "name": "Revision or removal of pacemaker device"
        },
        {
         "code": "37.90",
         "name": "Insertion of left atrial appendage device"
        },
        {
         "code": "37.91",
         "name": "Open chest cardiac massage"
        },
        {
         "code": "37.92",
         "name": "Injection of therapeutic substance into heart"
        },
        {
         "code": "37.93",
         "name": "Injection of therapeutic substance into pericardium"
        },
        {
         "code": "37.94",
         "name": "Implantation or replacement of automatic cardioverter\/defibrillator, total system [AICD]"
        },
        {
         "code": "37.95",
         "name": "Implantation of automatic cardioverter\/defibrillator lead(s) only"
        },
        {
         "code": "37.96",
         "name": "Implantation of automatic cardioverter\/defibrillator pulse generator only"
        },
        {
         "code": "37.97",
         "name": "Replacement of automatic cardioverter\/defibrillator lead(s) only"
        },
        {
         "code": "37.98",
         "name": "Replacement of automatic cardioverter\/defibrillator pulse generator only"
        },
        {
         "code": "37.99",
         "name": "Other operations on heart and pericardium"
        },
        {
         "code": "38.00",
         "name": "Incision of vessel, unspecified site"
        },
        {
         "code": "38.01",
         "name": "Incision of vessel, intracranial vessels"
        },
        {
         "code": "38.02",
         "name": "Incision of vessel, other vessels of head and neck"
        },
        {
         "code": "38.03",
         "name": "Incision of vessel, upper limb vessels"
        },
        {
         "code": "38.04",
         "name": "Incision of vessel, aorta"
        },
        {
         "code": "38.05",
         "name": "Incision of vessel, other thoracic vessels"
        },
        {
         "code": "38.06",
         "name": "Incision of vessel, abdominal arteries"
        },
        {
         "code": "38.07",
         "name": "Incision of vessel, abdominal veins"
        },
        {
         "code": "38.08",
         "name": "Incision of vessel, lower limb arteries"
        },
        {
         "code": "38.09",
         "name": "Incision of vessel, lower limb veins"
        },
        {
         "code": "38.10",
         "name": "Endarterectomy, unspecified site"
        },
        {
         "code": "38.11",
         "name": "Endarterectomy, intracranial vessels"
        },
        {
         "code": "38.12",
         "name": "Endarterectomy, other vessels of head and neck"
        },
        {
         "code": "38.13",
         "name": "Endarterectomy, upper limb vessels"
        },
        {
         "code": "38.14",
         "name": "Endarterectomy, aorta"
        },
        {
         "code": "38.15",
         "name": "Endarterectomy, other thoracic vessels"
        },
        {
         "code": "38.16",
         "name": "Endarterectomy, abdominal arteries"
        },
        {
         "code": "38.18",
         "name": "Endarterectomy, lower limb arteries"
        },
        {
         "code": "38.21",
         "name": "Biopsy of blood vessel"
        },
        {
         "code": "38.22",
         "name": "Percutaneous angioscopy"
        },
        {
         "code": "38.23",
         "name": "Intravascular spectroscopy"
        },
        {
         "code": "38.24",
         "name": "Intravascular imaging of coronary vessel(s) by optical coherence tomography [OCT]"
        },
        {
         "code": "38.25",
         "name": "Intravascular imaging of non-coronary vessel(s) by optical coherence tomography [OCT]"
        },
        {
         "code": "38.29",
         "name": "Other diagnostic procedures on blood vessels"
        },
        {
         "code": "38.30",
         "name": "Resection of vessel with anastomosis, unspecified site"
        },
        {
         "code": "38.31",
         "name": "Resection of vessel with anastomosis, intracranial vessels"
        },
        {
         "code": "38.32",
         "name": "Resection of vessel with anastomosis, other vessels of head and neck"
        },
        {
         "code": "38.33",
         "name": "Resection of vessel with anastomosis, upper limb vessels"
        },
        {
         "code": "38.34",
         "name": "Resection of vessel with anastomosis, aorta"
        },
        {
         "code": "38.35",
         "name": "Resection of vessel with anastomosis, other thoracic vessels"
        },
        {
         "code": "38.36",
         "name": "Resection of vessel with anastomosis, abdominal arteries"
        },
        {
         "code": "38.37",
         "name": "Resection of vessel with anastomosis, abdominal veins"
        },
        {
         "code": "38.38",
         "name": "Resection of vessel with anastomosis, lower limb arteries"
        },
        {
         "code": "38.39",
         "name": "Resection of vessel with anastomosis, lower limb veins"
        },
        {
         "code": "38.40",
         "name": "Resection of vessel with replacement, unspecified site"
        },
        {
         "code": "38.41",
         "name": "Resection of vessel with replacement, intracranial vessels"
        },
        {
         "code": "38.42",
         "name": "Resection of vessel with replacement, other vessels of head and neck"
        },
        {
         "code": "38.43",
         "name": "Resection of vessel with replacement, upper limb vessels"
        },
        {
         "code": "38.44",
         "name": "Resection of vessel with replacement, aorta, abdominal"
        },
        {
         "code": "38.45",
         "name": "Resection of vessel with replacement, thoracic vessels"
        },
        {
         "code": "38.46",
         "name": "Resection of vessel with replacement, abdominal arteries"
        },
        {
         "code": "38.47",
         "name": "Resection of vessel with replacement, abdominal veins"
        },
        {
         "code": "38.48",
         "name": "Resection of vessel with replacement, lower limb arteries"
        },
        {
         "code": "38.49",
         "name": "Resection of vessel with replacement, lower limb veins"
        },
        {
         "code": "38.50",
         "name": "Ligation and stripping of varicose veins, unspecified site"
        },
        {
         "code": "38.51",
         "name": "Ligation and stripping of varicose veins, intracranial vessels"
        },
        {
         "code": "38.52",
         "name": "Ligation and stripping of varicose veins, other vessels of head and neck"
        },
        {
         "code": "38.53",
         "name": "Ligation and stripping of varicose veins, upper limb vessels"
        },
        {
         "code": "38.55",
         "name": "Ligation and stripping of varicose veins, other thoracic vessels"
        },
        {
         "code": "38.57",
         "name": "Ligation and stripping of varicose veins, abdominal veins"
        },
        {
         "code": "38.59",
         "name": "Ligation and stripping of varicose veins, lower limb veins"
        },
        {
         "code": "38.60",
         "name": "Other excision of vessels, unspecified site"
        },
        {
         "code": "38.61",
         "name": "Other excision of vessels, intracranial vessels"
        },
        {
         "code": "38.62",
         "name": "Other excision of vessels, other vessels of head and neck"
        },
        {
         "code": "38.63",
         "name": "Other excision of vessels, upper limb vessels"
        },
        {
         "code": "38.64",
         "name": "Other excision of vessels, aorta, abdominal"
        },
        {
         "code": "38.65",
         "name": "Other excision of vessels, thoracic vessels"
        },
        {
         "code": "38.66",
         "name": "Other excision of vessels, abdominal arteries"
        },
        {
         "code": "38.67",
         "name": "Other excision of vessels, abdominal veins"
        },
        {
         "code": "38.68",
         "name": "Other excision of vessels, lower limb arteries"
        },
        {
         "code": "38.69",
         "name": "Other excision of vessels, lower limb veins"
        },
        {
         "code": "38.7",
         "name": "Interruption of the vena cava"
        },
        {
         "code": "38.80",
         "name": "Other surgical occlusion of vessels, unspecified site"
        },
        {
         "code": "38.81",
         "name": "Other surgical occlusion of vessels, intracranial vessels"
        },
        {
         "code": "38.82",
         "name": "Other surgical occlusion of vessels, other vessels of head and neck"
        },
        {
         "code": "38.83",
         "name": "Other surgical occlusion of vessels, upper limb vessels"
        },
        {
         "code": "38.84",
         "name": "Other surgical occlusion of vessels, aorta, abdominal"
        },
        {
         "code": "38.85",
         "name": "Other surgical occlusion of vessels, thoracic vessels"
        },
        {
         "code": "38.86",
         "name": "Other surgical occlusion of vessels, abdominal arteries"
        },
        {
         "code": "38.87",
         "name": "Other surgical occlusion of vessels, abdominal veins"
        },
        {
         "code": "38.88",
         "name": "Other surgical occlusion of vessels, lower limb arteries"
        },
        {
         "code": "38.89",
         "name": "Other surgical occlusion of vessels, lower limb veins"
        },
        {
         "code": "38.91",
         "name": "Arterial catheterization"
        },
        {
         "code": "38.92",
         "name": "Umbilical vein catheterization"
        },
        {
         "code": "38.93",
         "name": "Venous catheterization, not elsewhere classified"
        },
        {
         "code": "38.94",
         "name": "Venous cutdown"
        },
        {
         "code": "38.95",
         "name": "Venous catheterization for renal dialysis"
        },
        {
         "code": "38.97",
         "name": "Central venous catheter placement with guidance"
        },
        {
         "code": "38.98",
         "name": "Other puncture of artery"
        },
        {
         "code": "38.99",
         "name": "Other puncture of vein"
        },
        {
         "code": "39.0",
         "name": "Systemic to pulmonary artery shunt"
        },
        {
         "code": "39.1",
         "name": "Intra-abdominal venous shunt"
        },
        {
         "code": "39.21",
         "name": "Caval-pulmonary artery anastomosis"
        },
        {
         "code": "39.22",
         "name": "Aorta-subclavian-carotid bypass"
        },
        {
         "code": "39.23",
         "name": "Other intrathoracic vascular shunt or bypass"
        },
        {
         "code": "39.24",
         "name": "Aorta-renal bypass"
        },
        {
         "code": "39.25",
         "name": "Aorta-iliac-femoral bypass"
        },
        {
         "code": "39.26",
         "name": "Other intra-abdominal vascular shunt or bypass"
        },
        {
         "code": "39.27",
         "name": "Arteriovenostomy for renal dialysis"
        },
        {
         "code": "39.28",
         "name": "Extracranial-intracranial (EC-IC) vascular bypass"
        },
        {
         "code": "39.29",
         "name": "Other (peripheral) vascular shunt or bypass"
        },
        {
         "code": "39.30",
         "name": "Suture of unspecified blood vessel"
        },
        {
         "code": "39.31",
         "name": "Suture of artery"
        },
        {
         "code": "39.32",
         "name": "Suture of vein"
        },
        {
         "code": "39.41",
         "name": "Control of hemorrhage following vascular surgery"
        },
        {
         "code": "39.42",
         "name": "Revision of arteriovenous shunt for renal dialysis"
        },
        {
         "code": "39.43",
         "name": "Removal of arteriovenous shunt for renal dialysis"
        },
        {
         "code": "39.49",
         "name": "Other revision of vascular procedure"
        },
        {
         "code": "39.50",
         "name": "Angioplasty or atherectomy of other non-coronary vessel(s)"
        },
        {
         "code": "39.51",
         "name": "Clipping of aneurysm"
        },
        {
         "code": "39.52",
         "name": "Other repair of aneurysm"
        },
        {
         "code": "39.53",
         "name": "Repair of arteriovenous fistula"
        },
        {
         "code": "39.54",
         "name": "Re-entry operation (aorta)"
        },
        {
         "code": "39.55",
         "name": "Reimplantation of aberrant renal vessel"
        },
        {
         "code": "39.56",
         "name": "Repair of blood vessel with tissue patch graft"
        },
        {
         "code": "39.57",
         "name": "Repair of blood vessel with synthetic patch graft"
        },
        {
         "code": "39.58",
         "name": "Repair of blood vessel with unspecified type of patch graft"
        },
        {
         "code": "39.59",
         "name": "Other repair of vessel"
        },
        {
         "code": "39.61",
         "name": "Extracorporeal circulation auxiliary to open heart surgery"
        },
        {
         "code": "39.62",
         "name": "Hypothermia (systemic) incidental to open heart surgery"
        },
        {
         "code": "39.63",
         "name": "Cardioplegia"
        },
        {
         "code": "39.64",
         "name": "Intraoperative cardiac pacemaker"
        },
        {
         "code": "39.65",
         "name": "Extracorporeal membrane oxygenation [ECMO]"
        },
        {
         "code": "39.66",
         "name": "Percutaneous cardiopulmonary bypass"
        },
        {
         "code": "39.71",
         "name": "Endovascular implantation of graft in abdominal aorta"
        },
        {
         "code": "39.72",
         "name": "Endovascular embolization or occlusion of head and neck vessels"
        },
        {
         "code": "39.73",
         "name": "Endovascular implantation of graft in thoracic aorta"
        },
        {
         "code": "39.74",
         "name": "Endovascular removal of obstruction from head and neck vessel(s)"
        },
        {
         "code": "39.75",
         "name": "Endovascular embolization or occlusion of vessel(s) of head or neck using bare coils"
        },
        {
         "code": "39.76",
         "name": "Endovascular embolization or occlusion of vessel(s) of head or neck using bioactive coils"
        },
        {
         "code": "39.79",
         "name": "Other endovascular procedures on other vessels"
        },
        {
         "code": "39.81",
         "name": "Implantation or replacement of carotid sinus stimulation device, total system"
        },
        {
         "code": "39.82",
         "name": "Implantation or replacement of carotid sinus stimulation lead(s) only"
        },
        {
         "code": "39.83",
         "name": "Implantation or replacement of carotid sinus stimulation pulse generator only"
        },
        {
         "code": "39.84",
         "name": "Revision of carotid sinus stimulation lead(s) only"
        },
        {
         "code": "39.85",
         "name": "Revision of carotid sinus stimulation pulse generator"
        },
        {
         "code": "39.86",
         "name": "Removal of carotid sinus stimulation device, total system"
        },
        {
         "code": "39.87",
         "name": "Removal of carotid sinus stimulation lead(s) only"
        },
        {
         "code": "39.88",
         "name": "Removal of carotid sinus stimulation pulse generator only"
        },
        {
         "code": "39.89",
         "name": "Other operations on carotid body, carotid sinus and other vascular bodies"
        },
        {
         "code": "39.90",
         "name": "Insertion of non-drug-eluting peripheral (non-coronary) vessel stent(s)"
        },
        {
         "code": "39.91",
         "name": "Freeing of vessel"
        },
        {
         "code": "39.92",
         "name": "Injection of sclerosing agent into vein"
        },
        {
         "code": "39.93",
         "name": "Insertion of vessel-to-vessel cannula"
        },
        {
         "code": "39.94",
         "name": "Replacement of vessel-to-vessel cannula"
        },
        {
         "code": "39.95",
         "name": "Hemodialysis"
        },
        {
         "code": "39.96",
         "name": "Total body perfusion"
        },
        {
         "code": "39.97",
         "name": "Other perfusion"
        },
        {
         "code": "39.98",
         "name": "Control of hemorrhage, not otherwise specified"
        },
        {
         "code": "39.99",
         "name": "Other operations on vessels"
        },
        {
         "code": "40.0",
         "name": "Incision of lymphatic structures"
        },
        {
         "code": "40.11",
         "name": "Biopsy of lymphatic structure"
        },
        {
         "code": "40.19",
         "name": "Other diagnostic procedures on lymphatic structures"
        },
        {
         "code": "40.21",
         "name": "Excision of deep cervical lymph node"
        },
        {
         "code": "40.22",
         "name": "Excision of internal mammary lymph node"
        },
        {
         "code": "40.23",
         "name": "Excision of axillary lymph node"
        },
        {
         "code": "40.24",
         "name": "Excision of inguinal lymph node"
        },
        {
         "code": "40.29",
         "name": "Simple excision of other lymphatic structure"
        },
        {
         "code": "40.3",
         "name": "Regional lymph node excision"
        },
        {
         "code": "40.40",
         "name": "Radical neck dissection, not otherwise specified"
        },
        {
         "code": "40.41",
         "name": "Radical neck dissection, unilateral"
        },
        {
         "code": "40.42",
         "name": "Radical neck dissection, bilateral"
        },
        {
         "code": "40.50",
         "name": "Radical excision of lymph nodes, not otherwise specified"
        },
        {
         "code": "40.51",
         "name": "Radical excision of axillary lymph nodes"
        },
        {
         "code": "40.52",
         "name": "Radical excision of periaortic lymph nodes"
        },
        {
         "code": "40.53",
         "name": "Radical excision of iliac lymph nodes"
        },
        {
         "code": "40.54",
         "name": "Radical groin dissection"
        },
        {
         "code": "40.59",
         "name": "Radical excision of other lymph nodes"
        },
        {
         "code": "40.61",
         "name": "Cannulation of thoracic duct"
        },
        {
         "code": "40.62",
         "name": "Fistulization of thoracic duct"
        },
        {
         "code": "40.63",
         "name": "Closure of fistula of thoracic duct"
        },
        {
         "code": "40.64",
         "name": "Ligation of thoracic duct"
        },
        {
         "code": "40.69",
         "name": "Other operations on thoracic duct"
        },
        {
         "code": "40.9",
         "name": "Other operations on lymphatic structures"
        },
        {
         "code": "41.00",
         "name": "Bone marrow transplant, not otherwise specified"
        },
        {
         "code": "41.01",
         "name": "Autologous bone marrow transplant without purging"
        },
        {
         "code": "41.02",
         "name": "Allogeneic bone marrow transplant with purging"
        },
        {
         "code": "41.03",
         "name": "Allogeneic bone marrow transplant without purging"
        },
        {
         "code": "41.04",
         "name": "Autologous hematopoietic stem cell transplant without purging"
        },
        {
         "code": "41.05",
         "name": "Allogeneic hematopoietic stem cell transpant without purging"
        },
        {
         "code": "41.06",
         "name": "Cord blood stem cell transplant"
        },
        {
         "code": "41.07",
         "name": "Autologous hematopoietic stem cell transplant with purging"
        },
        {
         "code": "41.08",
         "name": "Allogeneic hematopoietic stem cell transplant with purging"
        },
        {
         "code": "41.09",
         "name": "Autologous bone marrow transplant with purging"
        },
        {
         "code": "41.1",
         "name": "Puncture of spleen"
        },
        {
         "code": "41.2",
         "name": "Splenotomy"
        },
        {
         "code": "41.31",
         "name": "Biopsy of bone marrow"
        },
        {
         "code": "41.32",
         "name": "Closed [aspiration] [percutaneous] biopsy of spleen"
        },
        {
         "code": "41.33",
         "name": "Open biopsy of spleen"
        },
        {
         "code": "41.38",
         "name": "Other diagnostic procedures on bone marrow"
        },
        {
         "code": "41.39",
         "name": "Other diagnostic procedures on spleen"
        },
        {
         "code": "41.41",
         "name": "Marsupialization of splenic cyst"
        },
        {
         "code": "41.42",
         "name": "Excision of lesion or tissue of spleen"
        },
        {
         "code": "41.43",
         "name": "Partial splenectomy"
        },
        {
         "code": "41.5",
         "name": "Total splenectomy"
        },
        {
         "code": "41.91",
         "name": "Aspiration of bone marrow from donor for transplant"
        },
        {
         "code": "41.92",
         "name": "Injection into bone marrow"
        },
        {
         "code": "41.93",
         "name": "Excision of accessory spleen"
        },
        {
         "code": "41.94",
         "name": "Transplantation of spleen"
        },
        {
         "code": "41.95",
         "name": "Repair and plastic operations on spleen"
        },
        {
         "code": "41.98",
         "name": "Other operations on bone marrow"
        },
        {
         "code": "41.99",
         "name": "Other operations on spleen"
        },
        {
         "code": "42.01",
         "name": "Incision of esophageal web"
        },
        {
         "code": "42.09",
         "name": "Other incision of esophagus"
        },
        {
         "code": "42.10",
         "name": "Esophagostomy, not otherwise specified"
        },
        {
         "code": "42.11",
         "name": "Cervical esophagostomy"
        },
        {
         "code": "42.12",
         "name": "Exteriorization of esophageal pouch"
        },
        {
         "code": "42.19",
         "name": "Other external fistulization of esophagus"
        },
        {
         "code": "42.21",
         "name": "Operative esophagoscopy by incision"
        },
        {
         "code": "42.22",
         "name": "Esophagoscopy through artificial stoma"
        },
        {
         "code": "42.23",
         "name": "Other esophagoscopy"
        },
        {
         "code": "42.24",
         "name": "Closed [endoscopic] biopsy of esophagus"
        },
        {
         "code": "42.25",
         "name": "Open biopsy of esophagus"
        },
        {
         "code": "42.29",
         "name": "Other diagnostic procedures on esophagus"
        },
        {
         "code": "42.31",
         "name": "Local excision of esophageal diverticulum"
        },
        {
         "code": "42.32",
         "name": "Local excision of other lesion or tissue of esophagus"
        },
        {
         "code": "42.33",
         "name": "Endoscopic excision or destruction of lesion or tissue of esophagus"
        },
        {
         "code": "42.39",
         "name": "Other destruction of lesion or tissue of esophagus"
        },
        {
         "code": "42.40",
         "name": "Esophagectomy, not otherwise specified"
        },
        {
         "code": "42.41",
         "name": "Partial esophagectomy"
        },
        {
         "code": "42.42",
         "name": "Total esophagectomy"
        },
        {
         "code": "42.51",
         "name": "Intrathoracic esophagoesophagostomy"
        },
        {
         "code": "42.52",
         "name": "Intrathoracic esophagogastrostomy"
        },
        {
         "code": "42.53",
         "name": "Intrathoracic esophageal anastomosis with interposition of small bowel"
        },
        {
         "code": "42.54",
         "name": "Other intrathoracic esophagoenterostomy"
        },
        {
         "code": "42.55",
         "name": "Intrathoracic esophageal anastomosis with interposition of colon"
        },
        {
         "code": "42.56",
         "name": "Other intrathoracic esophagocolostomy"
        },
        {
         "code": "42.58",
         "name": "Intrathoracic esophageal anastomosis with other interposition"
        },
        {
         "code": "42.59",
         "name": "Other intrathoracic anastomosis of esophagus"
        },
        {
         "code": "42.61",
         "name": "Antesternal esophagoesophagostomy"
        },
        {
         "code": "42.62",
         "name": "Antesternal esophagogastrostomy"
        },
        {
         "code": "42.63",
         "name": "Antesternal esophageal anastomosis with interposition of small bowel"
        },
        {
         "code": "42.64",
         "name": "Other antesternal esophagoenterostomy"
        },
        {
         "code": "42.65",
         "name": "Antesternal esophageal anastomosis with interposition of colon"
        },
        {
         "code": "42.66",
         "name": "Other antesternal esophagocolostomy"
        },
        {
         "code": "42.68",
         "name": "Other antesternal esophageal anastomosis with interposition"
        },
        {
         "code": "42.69",
         "name": "Other antesternal anastomosis of esophagus"
        },
        {
         "code": "42.7",
         "name": "Esophagomyotomy"
        },
        {
         "code": "42.81",
         "name": "Insertion of permanent tube into esophagus"
        },
        {
         "code": "42.82",
         "name": "Suture of laceration of esophagus"
        },
        {
         "code": "42.83",
         "name": "Closure of esophagostomy"
        },
        {
         "code": "42.84",
         "name": "Repair of esophageal fistula, not elsewhere classified"
        },
        {
         "code": "42.85",
         "name": "Repair of esophageal stricture"
        },
        {
         "code": "42.86",
         "name": "Production of subcutaneous tunnel without esophageal anastomosis"
        },
        {
         "code": "42.87",
         "name": "Other graft of esophagus"
        },
        {
         "code": "42.89",
         "name": "Other repair of esophagus"
        },
        {
         "code": "42.91",
         "name": "Ligation of esophageal varices"
        },
        {
         "code": "42.92",
         "name": "Dilation of esophagus"
        },
        {
         "code": "42.99",
         "name": "Other operations on esophagus"
        },
        {
         "code": "43.0",
         "name": "Gastrotomy"
        },
        {
         "code": "43.11",
         "name": "Percutaneous [endoscopic] gastrostomy [PEG]"
        },
        {
         "code": "43.19",
         "name": "Other gastrostomy"
        },
        {
         "code": "43.3",
         "name": "Pyloromyotomy"
        },
        {
         "code": "43.41",
         "name": "Endoscopic excision or destruction of lesion or tissue of stomach"
        },
        {
         "code": "43.42",
         "name": "Local excision of other lesion or tissue of stomach"
        },
        {
         "code": "43.49",
         "name": "Other destruction of lesion or tissue of stomach"
        },
        {
         "code": "43.5",
         "name": "Partial gastrectomy with anastomosis to esophagus"
        },
        {
         "code": "43.6",
         "name": "Partial gastrectomy with anastomosis to duodenum"
        },
        {
         "code": "43.7",
         "name": "Partial gastrectomy with anastomosis to jejunum"
        },
        {
         "code": "43.81",
         "name": "Partial gastrectomy with jejunal transposition"
        },
        {
         "code": "43.89",
         "name": "Other partial gastrectomy"
        },
        {
         "code": "43.91",
         "name": "Total gastrectomy with intestinal interposition"
        },
        {
         "code": "43.99",
         "name": "Other total gastrectomy"
        },
        {
         "code": "44.00",
         "name": "Vagotomy, not otherwise specified"
        },
        {
         "code": "44.01",
         "name": "Truncal vagotomy"
        },
        {
         "code": "44.02",
         "name": "Highly selective vagotomy"
        },
        {
         "code": "44.03",
         "name": "Other selective vagotomy"
        },
        {
         "code": "44.11",
         "name": "Transabdominal gastroscopy"
        },
        {
         "code": "44.12",
         "name": "Gastroscopy through artificial stoma"
        },
        {
         "code": "44.13",
         "name": "Other gastroscopy"
        },
        {
         "code": "44.14",
         "name": "Closed [endoscopic] biopsy of stomach"
        },
        {
         "code": "44.15",
         "name": "Open biopsy of stomach"
        },
        {
         "code": "44.19",
         "name": "Other diagnostic procedures on stomach"
        },
        {
         "code": "44.21",
         "name": "Dilation of pylorus by incision"
        },
        {
         "code": "44.22",
         "name": "Endoscopic dilation of pylorus"
        },
        {
         "code": "44.29",
         "name": "Other pyloroplasty"
        },
        {
         "code": "44.31",
         "name": "High gastric bypass"
        },
        {
         "code": "44.32",
         "name": "Percutaneous [endoscopic] gastrojejunostomy"
        },
        {
         "code": "44.38",
         "name": "Laparoscopic gastroenterostomy"
        },
        {
         "code": "44.39",
         "name": "Other gastroenterostomy without gastrectomy"
        },
        {
         "code": "44.40",
         "name": "Suture of peptic ulcer, not otherwise specified"
        },
        {
         "code": "44.41",
         "name": "Suture of gastric ulcer site"
        },
        {
         "code": "44.42",
         "name": "Suture of duodenal ulcer site"
        },
        {
         "code": "44.43",
         "name": "Endoscopic control of gastric or duodenal bleeding"
        },
        {
         "code": "44.44",
         "name": "Transcatheter embolization for gastric or duodenal bleeding"
        },
        {
         "code": "44.49",
         "name": "Other control of hemorrhage of stomach or duodenum"
        },
        {
         "code": "44.5",
         "name": "Revision of gastric anastomosis"
        },
        {
         "code": "44.61",
         "name": "Suture of laceration of stomach"
        },
        {
         "code": "44.62",
         "name": "Closure of gastrostomy"
        },
        {
         "code": "44.63",
         "name": "Closure of other gastric fistula"
        },
        {
         "code": "44.64",
         "name": "Gastropexy"
        },
        {
         "code": "44.65",
         "name": "Esophagogastroplasty"
        },
        {
         "code": "44.66",
         "name": "Other procedures for creation of esophagogastric sphincteric competence"
        },
        {
         "code": "44.67",
         "name": "Laparoscopic procedures for creation of esophagogastric sphincteric competence"
        },
        {
         "code": "44.68",
         "name": "Laparoscopic gastroplasty"
        },
        {
         "code": "44.69",
         "name": "Other repair of stomach"
        },
        {
         "code": "44.91",
         "name": "Ligation of gastric varices"
        },
        {
         "code": "44.92",
         "name": "Intraoperative manipulation of stomach"
        },
        {
         "code": "44.93",
         "name": "Insertion of gastric bubble (balloon)"
        },
        {
         "code": "44.94",
         "name": "Removal of gastric bubble (balloon)"
        },
        {
         "code": "44.95",
         "name": "Laparoscopic gastric restrictive procedure"
        },
        {
         "code": "44.96",
         "name": "Laparoscopic revision of gastric restrictive procedure"
        },
        {
         "code": "44.97",
         "name": "Laparoscopic removal of gastric restrictive device(s)"
        },
        {
         "code": "44.98",
         "name": "(Laparoscopic) adjustment of size of adjustable gastric restrictive device"
        },
        {
         "code": "44.99",
         "name": "Other operations on stomach"
        },
        {
         "code": "45.00",
         "name": "Incision of intestine, not otherwise specified"
        },
        {
         "code": "45.01",
         "name": "Incision of duodenum"
        },
        {
         "code": "45.02",
         "name": "Other incision of small intestine"
        },
        {
         "code": "45.03",
         "name": "Incision of large intestine"
        },
        {
         "code": "45.11",
         "name": "Transabdominal endoscopy of small intestine"
        },
        {
         "code": "45.12",
         "name": "Endoscopy of small intestine through artificial stoma"
        },
        {
         "code": "45.13",
         "name": "Other endoscopy of small intestine"
        },
        {
         "code": "45.14",
         "name": "Closed [endoscopic] biopsy of small intestine"
        },
        {
         "code": "45.15",
         "name": "Open biopsy of small intestine"
        },
        {
         "code": "45.16",
         "name": "Esophagogastroduodenoscopy [EGD] with closed biopsy"
        },
        {
         "code": "45.19",
         "name": "Other diagnostic procedures on small intestine"
        },
        {
         "code": "45.21",
         "name": "Transabdominal endoscopy of large intestine"
        },
        {
         "code": "45.22",
         "name": "Endoscopy of large intestine through artificial stoma"
        },
        {
         "code": "45.23",
         "name": "Colonoscopy"
        },
        {
         "code": "45.24",
         "name": "Flexible sigmoidoscopy"
        },
        {
         "code": "45.25",
         "name": "Closed [endoscopic] biopsy of large intestine"
        },
        {
         "code": "45.26",
         "name": "Open biopsy of large intestine"
        },
        {
         "code": "45.27",
         "name": "Intestinal biopsy, site unspecified"
        },
        {
         "code": "45.28",
         "name": "Other diagnostic procedures on large intestine"
        },
        {
         "code": "45.29",
         "name": "Other diagnostic procedures on intestine, site unspecified"
        },
        {
         "code": "45.30",
         "name": "Endoscopic excision or destruction of lesion of duodenum"
        },
        {
         "code": "45.31",
         "name": "Other local excision of lesion of duodenum"
        },
        {
         "code": "45.32",
         "name": "Other destruction of lesion of duodenum"
        },
        {
         "code": "45.33",
         "name": "Local excision of lesion or tissue of small intestine, except duodenum"
        },
        {
         "code": "45.34",
         "name": "Other destruction of lesion of small intestine, except duodenum"
        },
        {
         "code": "45.41",
         "name": "Excision of lesion or tissue of large intestine"
        },
        {
         "code": "45.42",
         "name": "Endoscopic polypectomy of large intestine"
        },
        {
         "code": "45.43",
         "name": "Endoscopic destruction of other lesion or tissue of large intestine"
        },
        {
         "code": "45.49",
         "name": "Other destruction of lesion of large intestine"
        },
        {
         "code": "45.50",
         "name": "Isolation of intestinal segment, not otherwise specified"
        },
        {
         "code": "45.51",
         "name": "Isolation of segment of small intestine"
        },
        {
         "code": "45.52",
         "name": "Isolation of segment of large intestine"
        },
        {
         "code": "45.61",
         "name": "Multiple segmental resection of small intestine"
        },
        {
         "code": "45.62",
         "name": "Other partial resection of small intestine"
        },
        {
         "code": "45.63",
         "name": "Total removal of small intestine"
        },
        {
         "code": "45.71",
         "name": "Open and other multiple segmental resection of large intestine"
        },
        {
         "code": "45.72",
         "name": "Open and other cecectomy"
        },
        {
         "code": "45.73",
         "name": "Open and other right hemicolectomy"
        },
        {
         "code": "45.74",
         "name": "Open and other resection of transverse colon"
        },
        {
         "code": "45.75",
         "name": "Open and other left hemicolectomy"
        },
        {
         "code": "45.76",
         "name": "Open and other sigmoidectomy"
        },
        {
         "code": "45.79",
         "name": "Other and unspecified partial excision of large intestine"
        },
        {
         "code": "45.81",
         "name": "Laparoscopic total intra-abdominal colectomy"
        },
        {
         "code": "45.82",
         "name": "Open total intra-abdominal colectomy"
        },
        {
         "code": "45.83",
         "name": "Other and unspecified total intra-abdominal colectomy"
        },
        {
         "code": "45.90",
         "name": "Intestinal anastomosis, not otherwise specified"
        },
        {
         "code": "45.91",
         "name": "Small-to-small intestinal anastomosis"
        },
        {
         "code": "45.92",
         "name": "Anastomosis of small intestine to rectal stump"
        },
        {
         "code": "45.93",
         "name": "Other small-to-large intestinal anastomosis"
        },
        {
         "code": "45.94",
         "name": "Large-to-large intestinal anastomosis"
        },
        {
         "code": "45.95",
         "name": "Anastomosis to anus"
        },
        {
         "code": "46.01",
         "name": "Exteriorization of small intestine"
        },
        {
         "code": "46.02",
         "name": "Resection of exteriorized segment of small intestine"
        },
        {
         "code": "46.03",
         "name": "Exteriorization of large intestine"
        },
        {
         "code": "46.04",
         "name": "Resection of exteriorized segment of large intestine"
        },
        {
         "code": "46.10",
         "name": "Colostomy, not otherwise specified"
        },
        {
         "code": "46.11",
         "name": "Temporary colostomy"
        },
        {
         "code": "46.13",
         "name": "Permanent colostomy"
        },
        {
         "code": "46.14",
         "name": "Delayed opening of colostomy"
        },
        {
         "code": "46.20",
         "name": "Ileostomy, not otherwise specified"
        },
        {
         "code": "46.21",
         "name": "Temporary ileostomy"
        },
        {
         "code": "46.22",
         "name": "Continent ileostomy"
        },
        {
         "code": "46.23",
         "name": "Other permanent ileostomy"
        },
        {
         "code": "46.24",
         "name": "Delayed opening of ileostomy"
        },
        {
         "code": "46.31",
         "name": "Delayed opening of other enterostomy"
        },
        {
         "code": "46.32",
         "name": "Percutaneous (endoscopic) jejunostomy [PEJ]"
        },
        {
         "code": "46.39",
         "name": "Other enterostomy"
        },
        {
         "code": "46.40",
         "name": "Revision of intestinal stoma, not otherwise specified"
        },
        {
         "code": "46.41",
         "name": "Revision of stoma of small intestine"
        },
        {
         "code": "46.42",
         "name": "Repair of pericolostomy hernia"
        },
        {
         "code": "46.43",
         "name": "Other revision of stoma of large intestine"
        },
        {
         "code": "46.50",
         "name": "Closure of intestinal stoma, not otherwise specified"
        },
        {
         "code": "46.51",
         "name": "Closure of stoma of small intestine"
        },
        {
         "code": "46.52",
         "name": "Closure of stoma of large intestine"
        },
        {
         "code": "46.60",
         "name": "Fixation of intestine, not otherwise specified"
        },
        {
         "code": "46.61",
         "name": "Fixation of small intestine to abdominal wall"
        },
        {
         "code": "46.62",
         "name": "Other fixation of small intestine"
        },
        {
         "code": "46.63",
         "name": "Fixation of large intestine to abdominal wall"
        },
        {
         "code": "46.64",
         "name": "Other fixation of large intestine"
        },
        {
         "code": "46.71",
         "name": "Suture of laceration of duodenum"
        },
        {
         "code": "46.72",
         "name": "Closure of fistula of duodenum"
        },
        {
         "code": "46.73",
         "name": "Suture of laceration of small intestine, except duodenum"
        },
        {
         "code": "46.74",
         "name": "Closure of fistula of small intestine, except duodenum"
        },
        {
         "code": "46.75",
         "name": "Suture of laceration of large intestine"
        },
        {
         "code": "46.76",
         "name": "Closure of fistula of large intestine"
        },
        {
         "code": "46.79",
         "name": "Other repair of intestine"
        },
        {
         "code": "46.80",
         "name": "Intra-abdominal manipulation of intestine, not otherwise specified"
        },
        {
         "code": "46.81",
         "name": "Intra-abdominal manipulation of small intestine"
        },
        {
         "code": "46.82",
         "name": "Intra-abdominal manipulation of large intestine"
        },
        {
         "code": "46.85",
         "name": "Dilation of intestine"
        },
        {
         "code": "46.86",
         "name": "Endoscopic insertion of colonic stent(s)"
        },
        {
         "code": "46.87",
         "name": "Other insertion of colonic stent(s)"
        },
        {
         "code": "46.91",
         "name": "Myotomy of sigmoid colon"
        },
        {
         "code": "46.92",
         "name": "Myotomy of other parts of colon"
        },
        {
         "code": "46.93",
         "name": "Revision of anastomosis of small intestine"
        },
        {
         "code": "46.94",
         "name": "Revision of anastomosis of large intestine"
        },
        {
         "code": "46.95",
         "name": "Local perfusion of small intestine"
        },
        {
         "code": "46.96",
         "name": "Local perfusion of large intestine"
        },
        {
         "code": "46.97",
         "name": "Transplant of intestine"
        },
        {
         "code": "46.99",
         "name": "Other operations on intestines"
        },
        {
         "code": "47.01",
         "name": "Laparoscopic appendectomy"
        },
        {
         "code": "47.09",
         "name": "Other appendectomy"
        },
        {
         "code": "47.11",
         "name": "Laparoscopic incidental appendectomy"
        },
        {
         "code": "47.19",
         "name": "Other incidental appendectomy"
        },
        {
         "code": "47.2",
         "name": "Drainage of appendiceal abscess"
        },
        {
         "code": "47.91",
         "name": "Appendicostomy"
        },
        {
         "code": "47.92",
         "name": "Closure of appendiceal fistula"
        },
        {
         "code": "47.99",
         "name": "Other operations on appendix"
        },
        {
         "code": "48.0",
         "name": "Proctotomy"
        },
        {
         "code": "48.1",
         "name": "Proctostomy"
        },
        {
         "code": "48.21",
         "name": "Transabdominal proctosigmoidoscopy"
        },
        {
         "code": "48.22",
         "name": "Proctosigmoidoscopy through artificial stoma"
        },
        {
         "code": "48.23",
         "name": "Rigid proctosigmoidoscopy"
        },
        {
         "code": "48.24",
         "name": "Closed [endoscopic] biopsy of rectum"
        },
        {
         "code": "48.25",
         "name": "Open biopsy of rectum"
        },
        {
         "code": "48.26",
         "name": "Biopsy of perirectal tissue"
        },
        {
         "code": "48.29",
         "name": "Other diagnostic procedures on rectum, rectosigmoid and perirectal tissue"
        },
        {
         "code": "48.31",
         "name": "Radical electrocoagulation of rectal lesion or tissue"
        },
        {
         "code": "48.32",
         "name": "Other electrocoagulation of rectal lesion or tissue"
        },
        {
         "code": "48.33",
         "name": "Destruction of rectal lesion or tissue by laser"
        },
        {
         "code": "48.34",
         "name": "Destruction of rectal lesion or tissue by cryosurgery"
        },
        {
         "code": "48.35",
         "name": "Local excision of rectal lesion or tissue"
        },
        {
         "code": "48.36",
         "name": "[Endoscopic] polypectomy of rectum"
        },
        {
         "code": "48.40",
         "name": "Pull-through resection of rectum, not otherwise specified"
        },
        {
         "code": "48.41",
         "name": "Soave submucosal resection of rectum"
        },
        {
         "code": "48.42",
         "name": "Laparoscopic pull-through resection of rectum"
        },
        {
         "code": "48.43",
         "name": "Open pull-through resection of rectum"
        },
        {
         "code": "48.49",
         "name": "Other pull-through resection of rectum"
        },
        {
         "code": "48.50",
         "name": "Abdominoperineal resection of the rectum, not otherwise specified"
        },
        {
         "code": "48.51",
         "name": "Laparoscopic abdominoperineal resection of the rectum"
        },
        {
         "code": "48.52",
         "name": "Open abdominoperineal resection of the rectum"
        },
        {
         "code": "48.59",
         "name": "Other abdominoperineal resection of the rectum"
        },
        {
         "code": "48.61",
         "name": "Transsacral rectosigmoidectomy"
        },
        {
         "code": "48.62",
         "name": "Anterior resection of rectum with synchronous colostomy"
        },
        {
         "code": "48.63",
         "name": "Other anterior resection of rectum"
        },
        {
         "code": "48.64",
         "name": "Posterior resection of rectum"
        },
        {
         "code": "48.65",
         "name": "Duhamel resection of rectum"
        },
        {
         "code": "48.69",
         "name": "Other resection of rectum"
        },
        {
         "code": "48.71",
         "name": "Suture of laceration of rectum"
        },
        {
         "code": "48.72",
         "name": "Closure of proctostomy"
        },
        {
         "code": "48.73",
         "name": "Closure of other rectal fistula"
        },
        {
         "code": "48.74",
         "name": "Rectorectostomy"
        },
        {
         "code": "48.75",
         "name": "Abdominal proctopexy"
        },
        {
         "code": "48.76",
         "name": "Other proctopexy"
        },
        {
         "code": "48.79",
         "name": "Other repair of rectum"
        },
        {
         "code": "48.81",
         "name": "Incision of perirectal tissue"
        },
        {
         "code": "48.82",
         "name": "Excision of perirectal tissue"
        },
        {
         "code": "48.91",
         "name": "Incision of rectal stricture"
        },
        {
         "code": "48.92",
         "name": "Anorectal myectomy"
        },
        {
         "code": "48.93",
         "name": "Repair of perirectal fistula"
        },
        {
         "code": "48.99",
         "name": "Other operations on rectum and perirectal tissue"
        },
        {
         "code": "49.01",
         "name": "Incision of perianal abscess"
        },
        {
         "code": "49.02",
         "name": "Other incision of perianal tissue"
        },
        {
         "code": "49.03",
         "name": "Excision of perianal skin tags"
        },
        {
         "code": "49.04",
         "name": "Other excision of perianal tissue"
        },
        {
         "code": "49.11",
         "name": "Anal fistulotomy"
        },
        {
         "code": "49.12",
         "name": "Anal fistulectomy"
        },
        {
         "code": "49.21",
         "name": "Anoscopy"
        },
        {
         "code": "49.22",
         "name": "Biopsy of perianal tissue"
        },
        {
         "code": "49.23",
         "name": "Biopsy of anus"
        },
        {
         "code": "49.29",
         "name": "Other diagnostic procedures on anus and perianal tissue"
        },
        {
         "code": "49.31",
         "name": "Endoscopic excision or destruction of lesion or tissue of anus"
        },
        {
         "code": "49.39",
         "name": "Other local excision or destruction of lesion or tissue of anus"
        },
        {
         "code": "49.41",
         "name": "Reduction of hemorrhoids"
        },
        {
         "code": "49.42",
         "name": "Injection of hemorrhoids"
        },
        {
         "code": "49.43",
         "name": "Cauterization of hemorrhoids"
        },
        {
         "code": "49.44",
         "name": "Destruction of hemorrhoids by cryotherapy"
        },
        {
         "code": "49.45",
         "name": "Ligation of hemorrhoids"
        },
        {
         "code": "49.46",
         "name": "Excision of hemorrhoids"
        },
        {
         "code": "49.47",
         "name": "Evacuation of thrombosed hemorrhoids"
        },
        {
         "code": "49.49",
         "name": "Other procedures on hemorrhoids"
        },
        {
         "code": "49.51",
         "name": "Left lateral anal sphincterotomy"
        },
        {
         "code": "49.52",
         "name": "Posterior anal sphincterotomy"
        },
        {
         "code": "49.59",
         "name": "Other anal sphincterotomy"
        },
        {
         "code": "49.6",
         "name": "Excision of anus"
        },
        {
         "code": "49.71",
         "name": "Suture of laceration of anus"
        },
        {
         "code": "49.72",
         "name": "Anal cerclage"
        },
        {
         "code": "49.73",
         "name": "Closure of anal fistula"
        },
        {
         "code": "49.74",
         "name": "Gracilis muscle transplant for anal incontinence"
        },
        {
         "code": "49.75",
         "name": "Implantation or revision of artificial anal sphincter"
        },
        {
         "code": "49.76",
         "name": "Removal of artificial anal sphincter"
        },
        {
         "code": "49.79",
         "name": "Other repair of anal sphincter"
        },
        {
         "code": "49.91",
         "name": "Incision of anal septum"
        },
        {
         "code": "49.92",
         "name": "Insertion of subcutaneous electrical anal stimulator"
        },
        {
         "code": "49.93",
         "name": "Other incision of anus"
        },
        {
         "code": "49.94",
         "name": "Reduction of anal prolapse"
        },
        {
         "code": "49.95",
         "name": "Control of (postoperative) hemorrhage of anus"
        },
        {
         "code": "49.99",
         "name": "Other operations on anus"
        },
        {
         "code": "50.0",
         "name": "Hepatotomy"
        },
        {
         "code": "50.11",
         "name": "Closed (percutaneous) [needle] biopsy of liver"
        },
        {
         "code": "50.12",
         "name": "Open biopsy of liver"
        },
        {
         "code": "50.13",
         "name": "Transjugular liver biopsy"
        },
        {
         "code": "50.14",
         "name": "Laparoscopic liver biopsy"
        },
        {
         "code": "50.19",
         "name": "Other diagnostic procedures on liver"
        },
        {
         "code": "50.21",
         "name": "Marsupialization of lesion of liver"
        },
        {
         "code": "50.22",
         "name": "Partial hepatectomy"
        },
        {
         "code": "50.23",
         "name": "Open ablation of liver lesion or tissue"
        },
        {
         "code": "50.24",
         "name": "Percutaneous ablation of liver lesion or tissue"
        },
        {
         "code": "50.25",
         "name": "Laparoscopic ablation of liver lesion or tissue"
        },
        {
         "code": "50.26",
         "name": "Other and unspecified ablation of liver lesion or tissue"
        },
        {
         "code": "50.29",
         "name": "Other destruction of lesion of liver"
        },
        {
         "code": "50.3",
         "name": "Lobectomy of liver"
        },
        {
         "code": "50.4",
         "name": "Total hepatectomy"
        },
        {
         "code": "50.51",
         "name": "Auxiliary liver transplant"
        },
        {
         "code": "50.59",
         "name": "Other transplant of liver"
        },
        {
         "code": "50.61",
         "name": "Closure of laceration of liver"
        },
        {
         "code": "50.69",
         "name": "Other repair of liver"
        },
        {
         "code": "50.91",
         "name": "Percutaneous aspiration of liver"
        },
        {
         "code": "50.92",
         "name": "Extracorporeal hepatic assistance"
        },
        {
         "code": "50.93",
         "name": "Localized perfusion of liver"
        },
        {
         "code": "50.94",
         "name": "Other injection of therapeutic substance into liver"
        },
        {
         "code": "50.99",
         "name": "Other operations on liver"
        },
        {
         "code": "51.01",
         "name": "Percutaneous aspiration of gallbladder"
        },
        {
         "code": "51.02",
         "name": "Trocar cholecystostomy"
        },
        {
         "code": "51.03",
         "name": "Other cholecystostomy"
        },
        {
         "code": "51.04",
         "name": "Other cholecystotomy"
        },
        {
         "code": "51.10",
         "name": "Endoscopic retrograde cholangiopancreatography [ERCP]"
        },
        {
         "code": "51.11",
         "name": "Endoscopic retrograde cholangiography [ERC]"
        },
        {
         "code": "51.12",
         "name": "Percutaneous biopsy of gallbladder or bile ducts"
        },
        {
         "code": "51.13",
         "name": "Open biopsy of gallbladder or bile ducts"
        },
        {
         "code": "51.14",
         "name": "Other closed [endoscopic] biopsy of biliary duct or sphincter of Oddi"
        },
        {
         "code": "51.15",
         "name": "Pressure measurement of sphincter of Oddi"
        },
        {
         "code": "51.19",
         "name": "Other diagnostic procedures on biliary tract"
        },
        {
         "code": "51.21",
         "name": "Other partial cholecystectomy"
        },
        {
         "code": "51.22",
         "name": "Cholecystectomy"
        },
        {
         "code": "51.23",
         "name": "Laparoscopic cholecystectomy"
        },
        {
         "code": "51.24",
         "name": "Laparoscopic partial cholecystectomy"
        },
        {
         "code": "51.31",
         "name": "Anastomosis of gallbladder to hepatic ducts"
        },
        {
         "code": "51.32",
         "name": "Anastomosis of gallbladder to intestine"
        },
        {
         "code": "51.33",
         "name": "Anastomosis of gallbladder to pancreas"
        },
        {
         "code": "51.34",
         "name": "Anastomosis of gallbladder to stomach"
        },
        {
         "code": "51.35",
         "name": "Other gallbladder anastomosis"
        },
        {
         "code": "51.36",
         "name": "Choledochoenterostomy"
        },
        {
         "code": "51.37",
         "name": "Anastomosis of hepatic duct to gastrointestinal tract"
        },
        {
         "code": "51.39",
         "name": "Other bile duct anastomosis"
        },
        {
         "code": "51.41",
         "name": "Common duct exploration for removal of calculus"
        },
        {
         "code": "51.42",
         "name": "Common duct exploration for relief of other obstruction"
        },
        {
         "code": "51.43",
         "name": "Insertion of choledochohepatic tube for decompression"
        },
        {
         "code": "51.49",
         "name": "Incision of other bile ducts for relief of obstruction"
        },
        {
         "code": "51.51",
         "name": "Exploration of common duct"
        },
        {
         "code": "51.59",
         "name": "Other incision of other bile duct"
        },
        {
         "code": "51.61",
         "name": "Excision of cystic duct remnant"
        },
        {
         "code": "51.62",
         "name": "Excision of ampulla of Vater (with reimplantation of common duct)"
        },
        {
         "code": "51.63",
         "name": "Other excision of common duct"
        },
        {
         "code": "51.64",
         "name": "Endoscopic excision or destruction of lesion of biliary ducts or sphincter of Oddi"
        },
        {
         "code": "51.69",
         "name": "Excision of other bile duct"
        },
        {
         "code": "51.71",
         "name": "Simple suture of common bile duct"
        },
        {
         "code": "51.72",
         "name": "Choledochoplasty"
        },
        {
         "code": "51.79",
         "name": "Repair of other bile ducts"
        },
        {
         "code": "51.81",
         "name": "Dilation of sphincter of Oddi"
        },
        {
         "code": "51.82",
         "name": "Pancreatic sphincterotomy"
        },
        {
         "code": "51.83",
         "name": "Pancreatic sphincteroplasty"
        },
        {
         "code": "51.84",
         "name": "Endoscopic dilation of ampulla and biliary duct"
        },
        {
         "code": "51.85",
         "name": "Endoscopic sphincterotomy and papillotomy"
        },
        {
         "code": "51.86",
         "name": "Endoscopic insertion of nasobiliary drainage tube"
        },
        {
         "code": "51.87",
         "name": "Endoscopic insertion of stent (tube) into bile duct"
        },
        {
         "code": "51.88",
         "name": "Endoscopic removal of stone(s) from biliary tract"
        },
        {
         "code": "51.89",
         "name": "Other operations on sphincter of Oddi"
        },
        {
         "code": "51.91",
         "name": "Repair of laceration of gallbladder"
        },
        {
         "code": "51.92",
         "name": "Closure of cholecystostomy"
        },
        {
         "code": "51.93",
         "name": "Closure of other biliary fistula"
        },
        {
         "code": "51.94",
         "name": "Revision of anastomosis of biliary tract"
        },
        {
         "code": "51.95",
         "name": "Removal of prosthetic device from bile duct"
        },
        {
         "code": "51.96",
         "name": "Percutaneous extraction of common duct stones"
        },
        {
         "code": "51.98",
         "name": "Other percutaneous procedures on biliary tract"
        },
        {
         "code": "51.99",
         "name": "Other operations on biliary tract"
        },
        {
         "code": "52.01",
         "name": "Drainage of pancreatic cyst by catheter"
        },
        {
         "code": "52.09",
         "name": "Other pancreatotomy"
        },
        {
         "code": "52.11",
         "name": "Closed [aspiration] [needle] [percutaneous] biopsy of pancreas"
        },
        {
         "code": "52.12",
         "name": "Open biopsy of pancreas"
        },
        {
         "code": "52.13",
         "name": "Endoscopic retrograde pancreatography [ERP]"
        },
        {
         "code": "52.14",
         "name": "Closed [endoscopic] biopsy of pancreatic duct"
        },
        {
         "code": "52.19",
         "name": "Other diagnostic procedures on pancreas"
        },
        {
         "code": "52.21",
         "name": "Endoscopic excision or destruction of lesion or tissue of pancreatic duct"
        },
        {
         "code": "52.22",
         "name": "Other excision or destruction of lesion or tissue of pancreas or pancreatic duct"
        },
        {
         "code": "52.3",
         "name": "Marsupialization of pancreatic cyst"
        },
        {
         "code": "52.4",
         "name": "Internal drainage of pancreatic cyst"
        },
        {
         "code": "52.51",
         "name": "Proximal pancreatectomy"
        },
        {
         "code": "52.52",
         "name": "Distal pancreatectomy"
        },
        {
         "code": "52.53",
         "name": "Radical subtotal pancreatectomy"
        },
        {
         "code": "52.59",
         "name": "Other partial pancreatectomy"
        },
        {
         "code": "52.6",
         "name": "Total pancreatectomy"
        },
        {
         "code": "52.7",
         "name": "Radical pancreaticoduodenectomy"
        },
        {
         "code": "52.80",
         "name": "Pancreatic transplant, not otherwise specified"
        },
        {
         "code": "52.81",
         "name": "Reimplantation of pancreatic tissue"
        },
        {
         "code": "52.82",
         "name": "Homotransplant of pancreas"
        },
        {
         "code": "52.83",
         "name": "Heterotransplant of pancreas"
        },
        {
         "code": "52.84",
         "name": "Autotransplantation of cells of Islets of Langerhans"
        },
        {
         "code": "52.85",
         "name": "Allotransplantation of cells of Islets of Langerhans"
        },
        {
         "code": "52.86",
         "name": "Transplantation of cells of Islets of Langerhans, not otherwise specified"
        },
        {
         "code": "52.92",
         "name": "Cannulation of pancreatic duct"
        },
        {
         "code": "52.93",
         "name": "Endoscopic insertion of stent (tube) into pancreatic duct"
        },
        {
         "code": "52.94",
         "name": "Endoscopic removal of stone(s) from pancreatic duct"
        },
        {
         "code": "52.95",
         "name": "Other repair of pancreas"
        },
        {
         "code": "52.96",
         "name": "Anastomosis of pancreas"
        },
        {
         "code": "52.97",
         "name": "Endoscopic insertion of nasopancreatic drainage tube"
        },
        {
         "code": "52.98",
         "name": "Endoscopic dilation of pancreatic duct"
        },
        {
         "code": "52.99",
         "name": "Other operations on pancreas"
        },
        {
         "code": "53.00",
         "name": "Unilateral repair of inguinal hernia, not otherwise specified"
        },
        {
         "code": "53.01",
         "name": "Other and open repair of direct inguinal hernia"
        },
        {
         "code": "53.02",
         "name": "Other and open repair of indirect inguinal hernia"
        },
        {
         "code": "53.03",
         "name": "Other and open repair of direct inguinal hernia with graft or prosthesis"
        },
        {
         "code": "53.04",
         "name": "Other and open repair of indirect inguinal hernia with graft or prosthesis"
        },
        {
         "code": "53.05",
         "name": "Repair of inguinal hernia with graft or prosthesis, not otherwise specified"
        },
        {
         "code": "53.10",
         "name": "Bilateral repair of inguinal hernia, not otherwise specified"
        },
        {
         "code": "53.11",
         "name": "Other and open bilateral repair of direct inguinal hernia"
        },
        {
         "code": "53.12",
         "name": "Other and open bilateral repair of indirect inguinal hernia"
        },
        {
         "code": "53.13",
         "name": "Other and open bilateral repair of inguinal hernia, one direct and one indirect"
        },
        {
         "code": "53.14",
         "name": "Other and open bilateral repair of direct inguinal hernia with graft or prosthesis"
        },
        {
         "code": "53.15",
         "name": "Other and open bilateral repair of indirect inguinal hernia with graft or prosthesis"
        },
        {
         "code": "53.16",
         "name": "Other and open bilateral repair of inguinal hernia, one direct and one indirect, with graft or prosthesis"
        },
        {
         "code": "53.17",
         "name": "Bilateral inguinal hernia repair with graft or prosthesis, not otherwise specified"
        },
        {
         "code": "53.21",
         "name": "Unilateral repair of femoral hernia with graft or prosthesis"
        },
        {
         "code": "53.29",
         "name": "Other unilateral femoral herniorrhaphy"
        },
        {
         "code": "53.31",
         "name": "Bilateral repair of femoral hernia with graft or prosthesis"
        },
        {
         "code": "53.39",
         "name": "Other bilateral femoral herniorrhaphy"
        },
        {
         "code": "53.41",
         "name": "Other and open repair of umbilical hernia with graft or prosthesis"
        },
        {
         "code": "53.42",
         "name": "Laparoscopic repair of umbilical hernia with graft or prosthesis"
        },
        {
         "code": "53.43",
         "name": "Other laparoscopic umbilical herniorrhaphy"
        },
        {
         "code": "53.49",
         "name": "Other open umbilical herniorrhaphy"
        },
        {
         "code": "53.51",
         "name": "Incisional hernia repair"
        },
        {
         "code": "53.59",
         "name": "Repair of other hernia of anterior abdominal wall"
        },
        {
         "code": "53.61",
         "name": "Other open incisional hernia repair with graft or prosthesis"
        },
        {
         "code": "53.62",
         "name": "Laparoscopic incisional hernia repair with graft or prosthesis"
        },
        {
         "code": "53.63",
         "name": "Other laparoscopic repair of other hernia of anterior abdominal wall with graft or prosthesis"
        },
        {
         "code": "53.69",
         "name": "Other and open repair of other hernia of anterior abdominal wall with graft or prosthesis"
        },
        {
         "code": "53.71",
         "name": "Laparoscopic repair of diaphragmatic hernia, abdominal approach"
        },
        {
         "code": "53.72",
         "name": "Other and open repair of diaphragmatic hernia, abdominal approach"
        },
        {
         "code": "53.75",
         "name": "Repair of diaphragmatic hernia, abdominal approach, not otherwise specified"
        },
        {
         "code": "53.80",
         "name": "Repair of diaphragmatic hernia with thoracic approach, not otherwise specified"
        },
        {
         "code": "53.81",
         "name": "Plication of the diaphragm"
        },
        {
         "code": "53.82",
         "name": "Repair of parasternal hernia"
        },
        {
         "code": "53.83",
         "name": "Laparoscopic repair of diaphragmatic hernia, with thoracic approach"
        },
        {
         "code": "53.84",
         "name": "Other and open repair of diaphragmatic hernia, with thoracic approach"
        },
        {
         "code": "53.9",
         "name": "Other hernia repair"
        },
        {
         "code": "54.0",
         "name": "Incision of abdominal wall"
        },
        {
         "code": "54.11",
         "name": "Exploratory laparotomy"
        },
        {
         "code": "54.12",
         "name": "Reopening of recent laparotomy site"
        },
        {
         "code": "54.19",
         "name": "Other laparotomy"
        },
        {
         "code": "54.21",
         "name": "Laparoscopy"
        },
        {
         "code": "54.22",
         "name": "Biopsy of abdominal wall or umbilicus"
        },
        {
         "code": "54.23",
         "name": "Biopsy of peritoneum"
        },
        {
         "code": "54.24",
         "name": "Closed [percutaneous] [needle] biopsy of intra-abdominal mass"
        },
        {
         "code": "54.25",
         "name": "Peritoneal lavage"
        },
        {
         "code": "54.29",
         "name": "Other diagnostic procedures on abdominal region"
        },
        {
         "code": "54.3",
         "name": "Excision or destruction of lesion or tissue of abdominal wall or umbilicus"
        },
        {
         "code": "54.4",
         "name": "Excision or destruction of peritoneal tissue"
        },
        {
         "code": "54.51",
         "name": "Laparoscopic lysis of peritoneal adhesions"
        },
        {
         "code": "54.59",
         "name": "Other lysis of peritoneal adhesions"
        },
        {
         "code": "54.61",
         "name": "Reclosure of postoperative disruption of abdominal wall"
        },
        {
         "code": "54.62",
         "name": "Delayed closure of granulating abdominal wound"
        },
        {
         "code": "54.63",
         "name": "Other suture of abdominal wall"
        },
        {
         "code": "54.64",
         "name": "Suture of peritoneum"
        },
        {
         "code": "54.71",
         "name": "Repair of gastroschisis"
        },
        {
         "code": "54.72",
         "name": "Other repair of abdominal wall"
        },
        {
         "code": "54.73",
         "name": "Other repair of peritoneum"
        },
        {
         "code": "54.74",
         "name": "Other repair of omentum"
        },
        {
         "code": "54.75",
         "name": "Other repair of mesentery"
        },
        {
         "code": "54.91",
         "name": "Percutaneous abdominal drainage"
        },
        {
         "code": "54.92",
         "name": "Removal of foreign body from peritoneal cavity"
        },
        {
         "code": "54.93",
         "name": "Creation of cutaneoperitoneal fistula"
        },
        {
         "code": "54.94",
         "name": "Creation of peritoneovascular shunt"
        },
        {
         "code": "54.95",
         "name": "Incision of peritoneum"
        },
        {
         "code": "54.96",
         "name": "Injection of air into peritoneal cavity"
        },
        {
         "code": "54.97",
         "name": "Injection of locally-acting therapeutic substance into peritoneal cavity"
        },
        {
         "code": "54.98",
         "name": "Peritoneal dialysis"
        },
        {
         "code": "54.99",
         "name": "Other operations of abdominal region"
        },
        {
         "code": "55.01",
         "name": "Nephrotomy"
        },
        {
         "code": "55.02",
         "name": "Nephrostomy"
        },
        {
         "code": "55.03",
         "name": "Percutaneous nephrostomy without fragmentation"
        },
        {
         "code": "55.04",
         "name": "Percutaneous nephrostomy with fragmentation"
        },
        {
         "code": "55.11",
         "name": "Pyelotomy"
        },
        {
         "code": "55.12",
         "name": "Pyelostomy"
        },
        {
         "code": "55.21",
         "name": "Nephroscopy"
        },
        {
         "code": "55.22",
         "name": "Pyeloscopy"
        },
        {
         "code": "55.23",
         "name": "Closed [percutaneous] [needle] biopsy of kidney"
        },
        {
         "code": "55.24",
         "name": "Open biopsy of kidney"
        },
        {
         "code": "55.29",
         "name": "Other diagnostic procedures on kidney"
        },
        {
         "code": "55.31",
         "name": "Marsupialization of kidney lesion"
        },
        {
         "code": "55.32",
         "name": "Open ablation of renal lesion or tissue"
        },
        {
         "code": "55.33",
         "name": "Percutaneous ablation of renal lesion or tissue"
        },
        {
         "code": "55.34",
         "name": "Laparoscopic ablation of renal lesion or tissue"
        },
        {
         "code": "55.35",
         "name": "Other and unspecified ablation of renal lesion or tissue"
        },
        {
         "code": "55.39",
         "name": "Other local destruction or excision of renal lesion or tissue"
        },
        {
         "code": "55.4",
         "name": "Partial nephrectomy"
        },
        {
         "code": "55.51",
         "name": "Nephroureterectomy"
        },
        {
         "code": "55.52",
         "name": "Nephrectomy of remaining kidney"
        },
        {
         "code": "55.53",
         "name": "Removal of transplanted or rejected kidney"
        },
        {
         "code": "55.54",
         "name": "Bilateral nephrectomy"
        },
        {
         "code": "55.61",
         "name": "Renal autotransplantation"
        },
        {
         "code": "55.69",
         "name": "Other kidney transplantation"
        },
        {
         "code": "55.7",
         "name": "Nephropexy"
        },
        {
         "code": "55.81",
         "name": "Suture of laceration of kidney"
        },
        {
         "code": "55.82",
         "name": "Closure of nephrostomy and pyelostomy"
        },
        {
         "code": "55.83",
         "name": "Closure of other fistula of kidney"
        },
        {
         "code": "55.84",
         "name": "Reduction of torsion of renal pedicle"
        },
        {
         "code": "55.85",
         "name": "Symphysiotomy for horseshoe kidney"
        },
        {
         "code": "55.86",
         "name": "Anastomosis of kidney"
        },
        {
         "code": "55.87",
         "name": "Correction of ureteropelvic junction"
        },
        {
         "code": "55.89",
         "name": "Other repair of kidney"
        },
        {
         "code": "55.91",
         "name": "Decapsulation of kidney"
        },
        {
         "code": "55.92",
         "name": "Percutaneous aspiration of kidney (pelvis)"
        },
        {
         "code": "55.93",
         "name": "Replacement of nephrostomy tube"
        },
        {
         "code": "55.94",
         "name": "Replacement of pyelostomy tube"
        },
        {
         "code": "55.95",
         "name": "Local perfusion of kidney"
        },
        {
         "code": "55.96",
         "name": "Other injection of therapeutic substance into kidney"
        },
        {
         "code": "55.97",
         "name": "Implantation or replacement of mechanical kidney"
        },
        {
         "code": "55.98",
         "name": "Removal of mechanical kidney"
        },
        {
         "code": "55.99",
         "name": "Other operations on kidney"
        },
        {
         "code": "56.0",
         "name": "Transurethral removal of obstruction from ureter and renal pelvis"
        },
        {
         "code": "56.1",
         "name": "Ureteral meatotomy"
        },
        {
         "code": "56.2",
         "name": "Ureterotomy"
        },
        {
         "code": "56.31",
         "name": "Ureteroscopy"
        },
        {
         "code": "56.32",
         "name": "Closed percutaneous biopsy of ureter"
        },
        {
         "code": "56.33",
         "name": "Closed endoscopic biopsy of ureter"
        },
        {
         "code": "56.34",
         "name": "Open biopsy of ureter"
        },
        {
         "code": "56.35",
         "name": "Endoscopy (cystoscopy) (looposcopy) of ileal conduit"
        },
        {
         "code": "56.39",
         "name": "Other diagnostic procedures on ureter"
        },
        {
         "code": "56.40",
         "name": "Ureterectomy, not otherwise specified"
        },
        {
         "code": "56.41",
         "name": "Partial ureterectomy"
        },
        {
         "code": "56.42",
         "name": "Total ureterectomy"
        },
        {
         "code": "56.51",
         "name": "Formation of cutaneous uretero-ileostomy"
        },
        {
         "code": "56.52",
         "name": "Revision of cutaneous uretero-ileostomy"
        },
        {
         "code": "56.61",
         "name": "Formation of other cutaneous ureterostomy"
        },
        {
         "code": "56.62",
         "name": "Revision of other cutaneous ureterostomy"
        },
        {
         "code": "56.71",
         "name": "Urinary diversion to intestine"
        },
        {
         "code": "56.72",
         "name": "Revision of ureterointestinal anastomosis"
        },
        {
         "code": "56.73",
         "name": "Nephrocystanastomosis, not otherwise specified"
        },
        {
         "code": "56.74",
         "name": "Ureteroneocystostomy"
        },
        {
         "code": "56.75",
         "name": "Transureteroureterostomy"
        },
        {
         "code": "56.79",
         "name": "Other anastomosis or bypass of ureter"
        },
        {
         "code": "56.81",
         "name": "Lysis of intraluminal adhesions of ureter"
        },
        {
         "code": "56.82",
         "name": "Suture of laceration of ureter"
        },
        {
         "code": "56.83",
         "name": "Closure of ureterostomy"
        },
        {
         "code": "56.84",
         "name": "Closure of other fistula of ureter"
        },
        {
         "code": "56.85",
         "name": "Ureteropexy"
        },
        {
         "code": "56.86",
         "name": "Removal of ligature from ureter"
        },
        {
         "code": "56.89",
         "name": "Other repair of ureter"
        },
        {
         "code": "56.91",
         "name": "Dilation of ureteral meatus"
        },
        {
         "code": "56.92",
         "name": "Implantation of electronic ureteral stimulator"
        },
        {
         "code": "56.93",
         "name": "Replacement of electronic ureteral stimulator"
        },
        {
         "code": "56.94",
         "name": "Removal of electronic ureteral stimulator"
        },
        {
         "code": "56.95",
         "name": "Ligation of ureter"
        },
        {
         "code": "56.99",
         "name": "Other operations on ureter"
        },
        {
         "code": "57.0",
         "name": "Transurethral clearance of bladder"
        },
        {
         "code": "57.11",
         "name": "Percutaneous aspiration of bladder"
        },
        {
         "code": "57.12",
         "name": "Lysis of intraluminal adhesions with incision into bladder"
        },
        {
         "code": "57.17",
         "name": "Percutaneous cystostomy"
        },
        {
         "code": "57.18",
         "name": "Other suprapubic cystostomy"
        },
        {
         "code": "57.19",
         "name": "Other cystotomy"
        },
        {
         "code": "57.21",
         "name": "Vesicostomy"
        },
        {
         "code": "57.22",
         "name": "Revision or closure of vesicostomy"
        },
        {
         "code": "57.31",
         "name": "Cystoscopy through artificial stoma"
        },
        {
         "code": "57.32",
         "name": "Other cystoscopy"
        },
        {
         "code": "57.33",
         "name": "Closed [transurethral] biopsy of bladder"
        },
        {
         "code": "57.34",
         "name": "Open biopsy of bladder"
        },
        {
         "code": "57.39",
         "name": "Other diagnostic procedures on bladder"
        },
        {
         "code": "57.41",
         "name": "Transurethral lysis of intraluminal adhesions"
        },
        {
         "code": "57.49",
         "name": "Other transurethral excision or destruction of lesion or tissue of bladder"
        },
        {
         "code": "57.51",
         "name": "Excision of urachus"
        },
        {
         "code": "57.59",
         "name": "Open excision or destruction of other lesion or tissue of bladder"
        },
        {
         "code": "57.6",
         "name": "Partial cystectomy"
        },
        {
         "code": "57.71",
         "name": "Radical cystectomy"
        },
        {
         "code": "57.79",
         "name": "Other total cystectomy"
        },
        {
         "code": "57.81",
         "name": "Suture of laceration of bladder"
        },
        {
         "code": "57.82",
         "name": "Closure of cystostomy"
        },
        {
         "code": "57.83",
         "name": "Repair of fistula involving bladder and intestine"
        },
        {
         "code": "57.84",
         "name": "Repair of other fistula of bladder"
        },
        {
         "code": "57.85",
         "name": "Cystourethroplasty and plastic repair of bladder neck"
        },
        {
         "code": "57.86",
         "name": "Repair of bladder exstrophy"
        },
        {
         "code": "57.87",
         "name": "Reconstruction of urinary bladder"
        },
        {
         "code": "57.88",
         "name": "Other anastomosis of bladder"
        },
        {
         "code": "57.89",
         "name": "Other repair of bladder"
        },
        {
         "code": "57.91",
         "name": "Sphincterotomy of bladder"
        },
        {
         "code": "57.92",
         "name": "Dilation of bladder neck"
        },
        {
         "code": "57.93",
         "name": "Control of (postoperative) hemorrhage of bladder"
        },
        {
         "code": "57.94",
         "name": "Insertion of indwelling urinary catheter"
        },
        {
         "code": "57.95",
         "name": "Replacement of indwelling urinary catheter"
        },
        {
         "code": "57.96",
         "name": "Implantation of electronic bladder stimulator"
        },
        {
         "code": "57.97",
         "name": "Replacement of electronic bladder stimulator"
        },
        {
         "code": "57.98",
         "name": "Removal of electronic bladder stimulator"
        },
        {
         "code": "57.99",
         "name": "Other operations on bladder"
        },
        {
         "code": "58.0",
         "name": "Urethrotomy"
        },
        {
         "code": "58.1",
         "name": "Urethral meatotomy"
        },
        {
         "code": "58.21",
         "name": "Perineal urethroscopy"
        },
        {
         "code": "58.22",
         "name": "Other urethroscopy"
        },
        {
         "code": "58.23",
         "name": "Biopsy of urethra"
        },
        {
         "code": "58.24",
         "name": "Biopsy of periurethral tissue"
        },
        {
         "code": "58.29",
         "name": "Other diagnostic procedures on urethra and periurethral tissue"
        },
        {
         "code": "58.31",
         "name": "Endoscopic excision or destruction of lesion or tissue of urethra"
        },
        {
         "code": "58.39",
         "name": "Other local excision or destruction of lesion or tissue of urethra"
        },
        {
         "code": "58.41",
         "name": "Suture of laceration of urethra"
        },
        {
         "code": "58.42",
         "name": "Closure of urethrostomy"
        },
        {
         "code": "58.43",
         "name": "Closure of other fistula of urethra"
        },
        {
         "code": "58.44",
         "name": "Reanastomosis of urethra"
        },
        {
         "code": "58.45",
         "name": "Repair of hypospadias or epispadias"
        },
        {
         "code": "58.46",
         "name": "Other reconstruction of urethra"
        },
        {
         "code": "58.47",
         "name": "Urethral meatoplasty"
        },
        {
         "code": "58.49",
         "name": "Other repair of urethra"
        },
        {
         "code": "58.5",
         "name": "Release of urethral stricture"
        },
        {
         "code": "58.6",
         "name": "Dilation of urethra"
        },
        {
         "code": "58.91",
         "name": "Incision of periurethral tissue"
        },
        {
         "code": "58.92",
         "name": "Excision of periurethral tissue"
        },
        {
         "code": "58.93",
         "name": "Implantation of artificial urinary sphincter [AUS]"
        },
        {
         "code": "58.99",
         "name": "Other operations on urethra and periurethral tissue"
        },
        {
         "code": "59.00",
         "name": "Retroperitoneal dissection, not otherwise specified"
        },
        {
         "code": "59.02",
         "name": "Other lysis of perirenal or periureteral adhesions"
        },
        {
         "code": "59.03",
         "name": "Laparoscopic lysis of perirenal or periureteral adhesions"
        },
        {
         "code": "59.09",
         "name": "Other incision of perirenal or periureteral tissue"
        },
        {
         "code": "59.11",
         "name": "Other lysis of perivesical adhesions"
        },
        {
         "code": "59.12",
         "name": "Laparoscopic lysis of perivesical adhesions"
        },
        {
         "code": "59.19",
         "name": "Other incision of perivesical tissue"
        },
        {
         "code": "59.21",
         "name": "Biopsy of perirenal or perivesical tissue"
        },
        {
         "code": "59.29",
         "name": "Other diagnostic procedures on perirenal tissue, perivesical tissue, and retroperitoneum"
        },
        {
         "code": "59.3",
         "name": "Plication of urethrovesical junction"
        },
        {
         "code": "59.4",
         "name": "Suprapubic sling operation"
        },
        {
         "code": "59.5",
         "name": "Retropubic urethral suspension"
        },
        {
         "code": "59.6",
         "name": "Paraurethral suspension"
        },
        {
         "code": "59.71",
         "name": "Levator muscle operation for urethrovesical suspension"
        },
        {
         "code": "59.72",
         "name": "Injection of implant into urethra and\/or bladder neck"
        },
        {
         "code": "59.79",
         "name": "Other repair of urinary stress incontinence"
        },
        {
         "code": "59.8",
         "name": "Ureteral catheterization"
        },
        {
         "code": "59.91",
         "name": "Excision of perirenal or perivesical tissue"
        },
        {
         "code": "59.92",
         "name": "Other operations on perirenal or perivesical tissue"
        },
        {
         "code": "59.93",
         "name": "Replacement of ureterostomy tube"
        },
        {
         "code": "59.94",
         "name": "Replacement of cystostomy tube"
        },
        {
         "code": "59.95",
         "name": "Ultrasonic fragmentation of urinary stones"
        },
        {
         "code": "59.99",
         "name": "Other operations on urinary system"
        },
        {
         "code": "60.0",
         "name": "Incision of prostate"
        },
        {
         "code": "60.11",
         "name": "Closed [percutaneous] [needle] biopsy of prostate"
        },
        {
         "code": "60.12",
         "name": "Open biopsy of prostate"
        },
        {
         "code": "60.13",
         "name": "Closed [percutaneous] biopsy of seminal vesicles"
        },
        {
         "code": "60.14",
         "name": "Open biopsy of seminal vesicles"
        },
        {
         "code": "60.15",
         "name": "Biopsy of periprostatic tissue"
        },
        {
         "code": "60.18",
         "name": "Other diagnostic procedures on prostate and periprostatic tissue"
        },
        {
         "code": "60.19",
         "name": "Other diagnostic procedures on seminal vesicles"
        },
        {
         "code": "60.21",
         "name": "Transurethral (ultrasound) guided laser induced prostatectomy (TULIP)"
        },
        {
         "code": "60.29",
         "name": "Other transurethral prostatectomy"
        },
        {
         "code": "60.3",
         "name": "Suprapubic prostatectomy"
        },
        {
         "code": "60.4",
         "name": "Retropubic prostatectomy"
        },
        {
         "code": "60.5",
         "name": "Radical prostatectomy"
        },
        {
         "code": "60.61",
         "name": "Local excision of lesion of prostate"
        },
        {
         "code": "60.62",
         "name": "Perineal prostatectomy"
        },
        {
         "code": "60.69",
         "name": "Other prostatectomy"
        },
        {
         "code": "60.71",
         "name": "Percutaneous aspiration of seminal vesicle"
        },
        {
         "code": "60.72",
         "name": "Incision of seminal vesicle"
        },
        {
         "code": "60.73",
         "name": "Excision of seminal vesicle"
        },
        {
         "code": "60.79",
         "name": "Other operations on seminal vesicles"
        },
        {
         "code": "60.81",
         "name": "Incision of periprostatic tissue"
        },
        {
         "code": "60.82",
         "name": "Excision of periprostatic tissue"
        },
        {
         "code": "60.91",
         "name": "Percutaneous aspiration of prostate"
        },
        {
         "code": "60.92",
         "name": "Injection into prostate"
        },
        {
         "code": "60.93",
         "name": "Repair of prostate"
        },
        {
         "code": "60.94",
         "name": "Control of (postoperative) hemorrhage of prostate"
        },
        {
         "code": "60.95",
         "name": "Transurethral balloon dilation of the prostatic urethra"
        },
        {
         "code": "60.96",
         "name": "Transurethral destruction of prostate tissue by microwave thermotherapy"
        },
        {
         "code": "60.97",
         "name": "Other transurethral destruction of prostate tissue by other thermotherapy"
        },
        {
         "code": "60.99",
         "name": "Other operations on prostate"
        },
        {
         "code": "61.0",
         "name": "Incision and drainage of scrotum and tunica vaginalis"
        },
        {
         "code": "61.11",
         "name": "Biopsy of scrotum or tunica vaginalis"
        },
        {
         "code": "61.19",
         "name": "Other diagnostic procedures on scrotum and tunica vaginalis"
        },
        {
         "code": "61.2",
         "name": "Excision of hydrocele (of tunica vaginalis)"
        },
        {
         "code": "61.3",
         "name": "Excision or destruction of lesion or tissue of scrotum"
        },
        {
         "code": "61.41",
         "name": "Suture of laceration of scrotum and tunica vaginalis"
        },
        {
         "code": "61.42",
         "name": "Repair of scrotal fistula"
        },
        {
         "code": "61.49",
         "name": "Other repair of scrotum and tunica vaginalis"
        },
        {
         "code": "61.91",
         "name": "Percutaneous aspiration of tunica vaginalis"
        },
        {
         "code": "61.92",
         "name": "Excision of lesion of tunica vaginalis other than hydrocele"
        },
        {
         "code": "61.99",
         "name": "Other operations on scrotum and tunica vaginalis"
        },
        {
         "code": "62.0",
         "name": "Incision of testis"
        },
        {
         "code": "62.11",
         "name": "Closed [percutaneous] [needle] biopsy of testis"
        },
        {
         "code": "62.12",
         "name": "Open biopsy of testis"
        },
        {
         "code": "62.19",
         "name": "Other diagnostic procedures on testes"
        },
        {
         "code": "62.2",
         "name": "Excision or destruction of testicular lesion"
        },
        {
         "code": "62.3",
         "name": "Unilateral orchiectomy"
        },
        {
         "code": "62.41",
         "name": "Removal of both testes at same operative episode"
        },
        {
         "code": "62.42",
         "name": "Removal of remaining testis"
        },
        {
         "code": "62.5",
         "name": "Orchiopexy"
        },
        {
         "code": "62.61",
         "name": "Suture of laceration of testis"
        },
        {
         "code": "62.69",
         "name": "Other repair of testis"
        },
        {
         "code": "62.7",
         "name": "Insertion of testicular prosthesis"
        },
        {
         "code": "62.91",
         "name": "Aspiration of testis"
        },
        {
         "code": "62.92",
         "name": "Injection of therapeutic substance into testis"
        },
        {
         "code": "62.99",
         "name": "Other operations on testes"
        },
        {
         "code": "63.01",
         "name": "Biopsy of spermatic cord, epididymis, or vas deferens"
        },
        {
         "code": "63.09",
         "name": "Other diagnostic procedures on spermatic cord, epididymis, and vas deferens"
        },
        {
         "code": "63.1",
         "name": "Excision of varicocele and hydrocele of spermatic cord"
        },
        {
         "code": "63.2",
         "name": "Excision of cyst of epididymis"
        },
        {
         "code": "63.3",
         "name": "Excision of other lesion or tissue of spermatic cord and epididymis"
        },
        {
         "code": "63.4",
         "name": "Epididymectomy"
        },
        {
         "code": "63.51",
         "name": "Suture of laceration of spermatic cord and epididymis"
        },
        {
         "code": "63.52",
         "name": "Reduction of torsion of testis or spermatic cord"
        },
        {
         "code": "63.53",
         "name": "Transplantation of spermatic cord"
        },
        {
         "code": "63.59",
         "name": "Other repair of spermatic cord and epididymis"
        },
        {
         "code": "63.6",
         "name": "Vasotomy"
        },
        {
         "code": "63.70",
         "name": "Male sterilization procedure, not otherwise specified"
        },
        {
         "code": "63.71",
         "name": "Ligation of vas deferens"
        },
        {
         "code": "63.72",
         "name": "Ligation of spermatic cord"
        },
        {
         "code": "63.73",
         "name": "Vasectomy"
        },
        {
         "code": "63.81",
         "name": "Suture of laceration of vas deferens and epididymis"
        },
        {
         "code": "63.82",
         "name": "Reconstruction of surgically divided vas deferens"
        },
        {
         "code": "63.83",
         "name": "Epididymovasostomy"
        },
        {
         "code": "63.84",
         "name": "Removal of ligature from vas deferens"
        },
        {
         "code": "63.85",
         "name": "Removal of valve from vas deferens"
        },
        {
         "code": "63.89",
         "name": "Other repair of vas deferens and epididymis"
        },
        {
         "code": "63.91",
         "name": "Aspiration of spermatocele"
        },
        {
         "code": "63.92",
         "name": "Epididymotomy"
        },
        {
         "code": "63.93",
         "name": "Incision of spermatic cord"
        },
        {
         "code": "63.94",
         "name": "Lysis of adhesions of spermatic cord"
        },
        {
         "code": "63.95",
         "name": "Insertion of valve in vas deferens"
        },
        {
         "code": "63.99",
         "name": "Other operations on spermatic card, epididymis, and vas deferens"
        },
        {
         "code": "64.0",
         "name": "Circumcision"
        },
        {
         "code": "64.11",
         "name": "Biopsy of penis"
        },
        {
         "code": "64.19",
         "name": "Other diagnostic procedures on penis"
        },
        {
         "code": "64.2",
         "name": "Local excision or destruction of lesion of penis"
        },
        {
         "code": "64.3",
         "name": "Amputation of penis"
        },
        {
         "code": "64.41",
         "name": "Suture of laceration of penis"
        },
        {
         "code": "64.42",
         "name": "Release of chordee"
        },
        {
         "code": "64.43",
         "name": "Construction of penis"
        },
        {
         "code": "64.44",
         "name": "Reconstruction of penis"
        },
        {
         "code": "64.45",
         "name": "Replantation of penis"
        },
        {
         "code": "64.49",
         "name": "Other repair of penis"
        },
        {
         "code": "64.5",
         "name": "Operations for sex transformation, not elsewhere classified"
        },
        {
         "code": "64.91",
         "name": "Dorsal or lateral slit of prepuce"
        },
        {
         "code": "64.92",
         "name": "Incision of penis"
        },
        {
         "code": "64.93",
         "name": "Division of penile adhesions"
        },
        {
         "code": "64.94",
         "name": "Fitting of external prosthesis of penis"
        },
        {
         "code": "64.95",
         "name": "Insertion or replacement of non-inflatable penile prosthesis"
        },
        {
         "code": "64.96",
         "name": "Removal of internal prosthesis of penis"
        },
        {
         "code": "64.97",
         "name": "Insertion or replacement of inflatable penile prosthesis"
        },
        {
         "code": "64.98",
         "name": "Other operations on penis"
        },
        {
         "code": "64.99",
         "name": "Other operations on male genital organs"
        },
        {
         "code": "65.01",
         "name": "Laparoscopic oophorotomy"
        },
        {
         "code": "65.09",
         "name": "Other oophorotomy"
        },
        {
         "code": "65.11",
         "name": "Aspiration biopsy of ovary"
        },
        {
         "code": "65.12",
         "name": "Other biopsy of ovary"
        },
        {
         "code": "65.13",
         "name": "Laparoscopic biopsy of ovary"
        },
        {
         "code": "65.14",
         "name": "Other laparoscopic diagnostic procedures on ovaries"
        },
        {
         "code": "65.19",
         "name": "Other diagnostic procedures on ovaries"
        },
        {
         "code": "65.21",
         "name": "Marsupialization of ovarian cyst"
        },
        {
         "code": "65.22",
         "name": "Wedge resection of ovary"
        },
        {
         "code": "65.23",
         "name": "Laparoscopic marsupialization of ovarian cyst"
        },
        {
         "code": "65.24",
         "name": "Laparoscopic wedge resection of ovary"
        },
        {
         "code": "65.25",
         "name": "Other laparoscopic local excision or destruction of ovary"
        },
        {
         "code": "65.29",
         "name": "Other local excision or destruction of ovary"
        },
        {
         "code": "65.31",
         "name": "Laparoscopic unilateral oophorectomy"
        },
        {
         "code": "65.39",
         "name": "Other unilateral oophorectomy"
        },
        {
         "code": "65.41",
         "name": "Laparoscopic unilateral salpingo-oophorectomy"
        },
        {
         "code": "65.49",
         "name": "Other unilateral salpingo-oophorectomy"
        },
        {
         "code": "65.51",
         "name": "Other removal of both ovaries at same operative episode"
        },
        {
         "code": "65.52",
         "name": "Other removal of remaining ovary"
        },
        {
         "code": "65.53",
         "name": "Laparoscopic removal of both ovaries at same operative episode"
        },
        {
         "code": "65.54",
         "name": "Laparoscopic removal of remaining ovary"
        },
        {
         "code": "65.61",
         "name": "Other removal of both ovaries and tubes at same operative episode"
        },
        {
         "code": "65.62",
         "name": "Other removal of remaining ovary and tube"
        },
        {
         "code": "65.63",
         "name": "Laparoscopic removal of both ovaries and tubes at same operative episode"
        },
        {
         "code": "65.64",
         "name": "Laparoscopic removal of remaining ovary and tube"
        },
        {
         "code": "65.71",
         "name": "Other simple suture of ovary"
        },
        {
         "code": "65.72",
         "name": "Other reimplantation of ovary"
        },
        {
         "code": "65.73",
         "name": "Other salpingo-oophoroplasty"
        },
        {
         "code": "65.74",
         "name": "Laparoscopic simple suture of ovary"
        },
        {
         "code": "65.75",
         "name": "Laparoscopic reimplantation of ovary"
        },
        {
         "code": "65.76",
         "name": "Laparoscopic salpingo-oophoroplasty"
        },
        {
         "code": "65.79",
         "name": "Other repair of ovary"
        },
        {
         "code": "65.81",
         "name": "Laparoscopic lysis of adhesions of ovary and fallopian tube"
        },
        {
         "code": "65.89",
         "name": "Other lysis of adhesions of ovary and fallopian tube"
        },
        {
         "code": "65.91",
         "name": "Aspiration of ovary"
        },
        {
         "code": "65.92",
         "name": "Transplantation of ovary"
        },
        {
         "code": "65.93",
         "name": "Manual rupture of ovarian cyst"
        },
        {
         "code": "65.94",
         "name": "Ovarian denervation"
        },
        {
         "code": "65.95",
         "name": "Release of torsion of ovary"
        },
        {
         "code": "65.99",
         "name": "Other operations on ovary"
        },
        {
         "code": "66.01",
         "name": "Salpingotomy"
        },
        {
         "code": "66.02",
         "name": "Salpingostomy"
        },
        {
         "code": "66.11",
         "name": "Biopsy of fallopian tube"
        },
        {
         "code": "66.19",
         "name": "Other diagnostic procedures on fallopian tubes"
        },
        {
         "code": "66.21",
         "name": "Bilateral endoscopic ligation and crushing of fallopian tubes"
        },
        {
         "code": "66.22",
         "name": "Bilateral endoscopic ligation and division of fallopian tubes"
        },
        {
         "code": "66.29",
         "name": "Other bilateral endoscopic destruction or occlusion of fallopian tubes"
        },
        {
         "code": "66.31",
         "name": "Other bilateral ligation and crushing of fallopian tubes"
        },
        {
         "code": "66.32",
         "name": "Other bilateral ligation and division of fallopian tubes"
        },
        {
         "code": "66.39",
         "name": "Other bilateral destruction or occlusion of fallopian tubes"
        },
        {
         "code": "66.4",
         "name": "Total unilateral salpingectomy"
        },
        {
         "code": "66.51",
         "name": "Removal of both fallopian tubes at same operative episode"
        },
        {
         "code": "66.52",
         "name": "Removal of remaining fallopian tube"
        },
        {
         "code": "66.61",
         "name": "Excision or destruction of lesion of fallopian tube"
        },
        {
         "code": "66.62",
         "name": "Salpingectomy with removal of tubal pregnancy"
        },
        {
         "code": "66.63",
         "name": "Bilateral partial salpingectomy, not otherwise specified"
        },
        {
         "code": "66.69",
         "name": "Other partial salpingectomy"
        },
        {
         "code": "66.71",
         "name": "Simple suture of fallopian tube"
        },
        {
         "code": "66.72",
         "name": "Salpingo-oophorostomy"
        },
        {
         "code": "66.73",
         "name": "Salpingo-salpingostomy"
        },
        {
         "code": "66.74",
         "name": "Salpingo-uterostomy"
        },
        {
         "code": "66.79",
         "name": "Other repair of fallopian tube"
        },
        {
         "code": "66.8",
         "name": "Insufflation of fallopian tube"
        },
        {
         "code": "66.91",
         "name": "Aspiration of fallopian tube"
        },
        {
         "code": "66.92",
         "name": "Unilateral destruction or occlusion of fallopian tube"
        },
        {
         "code": "66.93",
         "name": "Implantation or replacement of prosthesis of fallopian tube"
        },
        {
         "code": "66.94",
         "name": "Removal of prosthesis of fallopian tube"
        },
        {
         "code": "66.95",
         "name": "Insufflation of therapeutic agent into fallopian tubes"
        },
        {
         "code": "66.96",
         "name": "Dilation of fallopian tube"
        },
        {
         "code": "66.97",
         "name": "Burying of fimbriae in uterine wall"
        },
        {
         "code": "66.99",
         "name": "Other operations on fallopian tubes"
        },
        {
         "code": "67.0",
         "name": "Dilation of cervical canal"
        },
        {
         "code": "67.11",
         "name": "Endocervical biopsy"
        },
        {
         "code": "67.12",
         "name": "Other cervical biopsy"
        },
        {
         "code": "67.19",
         "name": "Other diagnostic procedures on cervix"
        },
        {
         "code": "67.2",
         "name": "Conization of cervix"
        },
        {
         "code": "67.31",
         "name": "Marsupialization of cervical cyst"
        },
        {
         "code": "67.32",
         "name": "Destruction of lesion of cervix by cauterization"
        },
        {
         "code": "67.33",
         "name": "Destruction of lesion of cervix by cryosurgery"
        },
        {
         "code": "67.39",
         "name": "Other excision or destruction of lesion or tissue of cervix"
        },
        {
         "code": "67.4",
         "name": "Amputation of cervix"
        },
        {
         "code": "67.51",
         "name": "Transabdominal cerclage of cervix"
        },
        {
         "code": "67.59",
         "name": "Other repair of internal cervical os"
        },
        {
         "code": "67.61",
         "name": "Suture of laceration of cervix"
        },
        {
         "code": "67.62",
         "name": "Repair of fistula of cervix"
        },
        {
         "code": "67.69",
         "name": "Other repair of cervix"
        },
        {
         "code": "68.0",
         "name": "Hysterotomy"
        },
        {
         "code": "68.11",
         "name": "Digital examination of uterus"
        },
        {
         "code": "68.12",
         "name": "Hysteroscopy"
        },
        {
         "code": "68.13",
         "name": "Open biopsy of uterus"
        },
        {
         "code": "68.14",
         "name": "Open biopsy of uterine ligaments"
        },
        {
         "code": "68.15",
         "name": "Closed biopsy of uterine ligaments"
        },
        {
         "code": "68.16",
         "name": "Closed biopsy of uterus"
        },
        {
         "code": "68.19",
         "name": "Other diagnostic procedures on uterus and supporting structures"
        },
        {
         "code": "68.21",
         "name": "Division of endometrial synechiae"
        },
        {
         "code": "68.22",
         "name": "Incision or excision of congenital septum of uterus"
        },
        {
         "code": "68.23",
         "name": "Endometrial ablation"
        },
        {
         "code": "68.29",
         "name": "Other excision or destruction of lesion of uterus"
        },
        {
         "code": "68.31",
         "name": "Laparoscopic supracervical hysterectomy [LSH]"
        },
        {
         "code": "68.39",
         "name": "Other and unspecified subtotal abdominal hysterectomy"
        },
        {
         "code": "68.41",
         "name": "Laparoscopic total abdominal hysterectomy"
        },
        {
         "code": "68.49",
         "name": "Other and unspecified total abdominal hysterectomy"
        },
        {
         "code": "68.51",
         "name": "Laparoscopically assisted vaginal hysterectomy (LAVH)"
        },
        {
         "code": "68.59",
         "name": "Other and unspecified vaginal hysterectomy"
        },
        {
         "code": "68.61",
         "name": "Laparoscopic radical abdominal hysterectomy"
        },
        {
         "code": "68.69",
         "name": "Other and unspecified radical abdominal hysterectomy"
        },
        {
         "code": "68.71",
         "name": "Laparoscopic radical vaginal hysterectomy [LRVH]"
        },
        {
         "code": "68.79",
         "name": "Other and unspecified radical vaginal hysterectomy"
        },
        {
         "code": "68.8",
         "name": "Pelvic evisceration"
        },
        {
         "code": "68.9",
         "name": "Other and unspecified hysterectomy"
        },
        {
         "code": "69.01",
         "name": "Dilation and curettage for termination of pregnancy"
        },
        {
         "code": "69.02",
         "name": "Dilation and curettage following delivery or abortion"
        },
        {
         "code": "69.09",
         "name": "Other dilation and curettage"
        },
        {
         "code": "69.19",
         "name": "Other excision or destruction of uterus and supporting structures"
        },
        {
         "code": "69.21",
         "name": "Interposition operation"
        },
        {
         "code": "69.22",
         "name": "Other uterine suspension"
        },
        {
         "code": "69.23",
         "name": "Vaginal repair of chronic inversion of uterus"
        },
        {
         "code": "69.29",
         "name": "Other repair of uterus and supporting structures"
        },
        {
         "code": "69.3",
         "name": "Paracervical uterine denervation"
        },
        {
         "code": "69.41",
         "name": "Suture of laceration of uterus"
        },
        {
         "code": "69.42",
         "name": "Closure of fistula of uterus"
        },
        {
         "code": "69.49",
         "name": "Other repair of uterus"
        },
        {
         "code": "69.51",
         "name": "Aspiration curettage of uterus for termination of pregnancy"
        },
        {
         "code": "69.52",
         "name": "Aspiration curettage following delivery or abortion"
        },
        {
         "code": "69.59",
         "name": "Other aspiration curettage of uterus"
        },
        {
         "code": "69.6",
         "name": "Menstrual extraction or regulation"
        },
        {
         "code": "69.7",
         "name": "Insertion of intrauterine contraceptive device"
        },
        {
         "code": "69.91",
         "name": "Insertion of therapeutic device into uterus"
        },
        {
         "code": "69.92",
         "name": "Artificial insemination"
        },
        {
         "code": "69.93",
         "name": "Insertion of laminaria"
        },
        {
         "code": "69.94",
         "name": "Manual replacement of inverted uterus"
        },
        {
         "code": "69.95",
         "name": "Incision of cervix"
        },
        {
         "code": "69.96",
         "name": "Removal of cerclage material from cervix"
        },
        {
         "code": "69.97",
         "name": "Removal of other penetrating foreign body from cervix"
        },
        {
         "code": "69.98",
         "name": "Other operations on supporting structures of uterus"
        },
        {
         "code": "69.99",
         "name": "Other operations on cervix and uterus"
        },
        {
         "code": "70.0",
         "name": "Culdocentesis"
        },
        {
         "code": "70.11",
         "name": "Hymenotomy"
        },
        {
         "code": "70.12",
         "name": "Culdotomy"
        },
        {
         "code": "70.13",
         "name": "Lysis of intraluminal adhesions of vagina"
        },
        {
         "code": "70.14",
         "name": "Other vaginotomy"
        },
        {
         "code": "70.21",
         "name": "Vaginoscopy"
        },
        {
         "code": "70.22",
         "name": "Culdoscopy"
        },
        {
         "code": "70.23",
         "name": "Biopsy of cul-de-sac"
        },
        {
         "code": "70.24",
         "name": "Vaginal biopsy"
        },
        {
         "code": "70.29",
         "name": "Other diagnostic procedures on vagina and cul-de-sac"
        },
        {
         "code": "70.31",
         "name": "Hymenectomy"
        },
        {
         "code": "70.32",
         "name": "Excision or destruction of lesion of cul-de-sac"
        },
        {
         "code": "70.33",
         "name": "Excision or destruction of lesion of vagina"
        },
        {
         "code": "70.4",
         "name": "Obliteration and total excision of vagina"
        },
        {
         "code": "70.50",
         "name": "Repair of cystocele and rectocele"
        },
        {
         "code": "70.51",
         "name": "Repair of cystocele"
        },
        {
         "code": "70.52",
         "name": "Repair of rectocele"
        },
        {
         "code": "70.53",
         "name": "Repair of cystocele and rectocele with graft or prosthesis"
        },
        {
         "code": "70.54",
         "name": "Repair of cystocele with graft or prosthesis"
        },
        {
         "code": "70.55",
         "name": "Repair of rectocele with graft or prosthesis"
        },
        {
         "code": "70.61",
         "name": "Vaginal construction"
        },
        {
         "code": "70.62",
         "name": "Vaginal reconstruction"
        },
        {
         "code": "70.63",
         "name": "Vaginal construction with graft or prosthesis"
        },
        {
         "code": "70.64",
         "name": "Vaginal reconstruction with graft or prosthesis"
        },
        {
         "code": "70.71",
         "name": "Suture of laceration of vagina"
        },
        {
         "code": "70.72",
         "name": "Repair of colovaginal fistula"
        },
        {
         "code": "70.73",
         "name": "Repair of rectovaginal fistula"
        },
        {
         "code": "70.74",
         "name": "Repair of other vaginoenteric fistula"
        },
        {
         "code": "70.75",
         "name": "Repair of other fistula of vagina"
        },
        {
         "code": "70.76",
         "name": "Hymenorrhaphy"
        },
        {
         "code": "70.77",
         "name": "Vaginal suspension and fixation"
        },
        {
         "code": "70.78",
         "name": "Vaginal suspension and fixation with graft or prosthesis"
        },
        {
         "code": "70.79",
         "name": "Other repair of vagina"
        },
        {
         "code": "70.8",
         "name": "Obliteration of vaginal vault"
        },
        {
         "code": "70.91",
         "name": "Other operations on vagina"
        },
        {
         "code": "70.92",
         "name": "Other operations on cul-de-sac"
        },
        {
         "code": "70.93",
         "name": "Other operations on cul-de-sac with graft or prosthesis"
        },
        {
         "code": "70.94",
         "name": "Insertion of biological graft"
        },
        {
         "code": "70.95",
         "name": "Insertion of synthetic graft or prosthesis"
        },
        {
         "code": "71.01",
         "name": "Lysis of vulvar adhesions"
        },
        {
         "code": "71.09",
         "name": "Other incision of vulva and perineum"
        },
        {
         "code": "71.11",
         "name": "Biopsy of vulva"
        },
        {
         "code": "71.19",
         "name": "Other diagnostic procedures on vulva"
        },
        {
         "code": "71.21",
         "name": "Percutaneous aspiration of Bartholin's gland (cyst)"
        },
        {
         "code": "71.22",
         "name": "Incision of Bartholin's gland (cyst)"
        },
        {
         "code": "71.23",
         "name": "Marsupialization of Bartholin's gland (cyst)"
        },
        {
         "code": "71.24",
         "name": "Excision or other destruction of Bartholin's gland (cyst)"
        },
        {
         "code": "71.29",
         "name": "Other operations on Bartholin's gland"
        },
        {
         "code": "71.3",
         "name": "Other local excision or destruction of vulva and perineum"
        },
        {
         "code": "71.4",
         "name": "Operations on clitoris"
        },
        {
         "code": "71.5",
         "name": "Radical vulvectomy"
        },
        {
         "code": "71.61",
         "name": "Unilateral vulvectomy"
        },
        {
         "code": "71.62",
         "name": "Bilateral vulvectomy"
        },
        {
         "code": "71.71",
         "name": "Suture of laceration of vulva or perineum"
        },
        {
         "code": "71.72",
         "name": "Repair of fistula of vulva or perineum"
        },
        {
         "code": "71.79",
         "name": "Other repair of vulva and perineum"
        },
        {
         "code": "71.8",
         "name": "Other operations on vulva"
        },
        {
         "code": "71.9",
         "name": "Other operations on female genital organs"
        },
        {
         "code": "72.0",
         "name": "Low forceps operation"
        },
        {
         "code": "72.1",
         "name": "Low forceps operation with episiotomy"
        },
        {
         "code": "72.21",
         "name": "Mid forceps operation with episiotomy"
        },
        {
         "code": "72.29",
         "name": "Other mid forceps operation"
        },
        {
         "code": "72.31",
         "name": "High forceps operation with episiotomy"
        },
        {
         "code": "72.39",
         "name": "Other high forceps operation"
        },
        {
         "code": "72.4",
         "name": "Forceps rotation of fetal head"
        },
        {
         "code": "72.51",
         "name": "Partial breech extraction with forceps to aftercoming head"
        },
        {
         "code": "72.52",
         "name": "Other partial breech extraction"
        },
        {
         "code": "72.53",
         "name": "Total breech extraction with forceps to aftercoming head"
        },
        {
         "code": "72.54",
         "name": "Other total breech extraction"
        },
        {
         "code": "72.6",
         "name": "Forceps application to aftercoming head"
        },
        {
         "code": "72.71",
         "name": "Vacuum extraction with episiotomy"
        },
        {
         "code": "72.79",
         "name": "Other vacuum extraction"
        },
        {
         "code": "72.8",
         "name": "Other specified instrumental delivery"
        },
        {
         "code": "72.9",
         "name": "Unspecified instrumental delivery"
        },
        {
         "code": "73.01",
         "name": "Induction of labor by artificial rupture of membranes"
        },
        {
         "code": "73.09",
         "name": "Other artificial rupture of membranes"
        },
        {
         "code": "73.1",
         "name": "Other surgical induction of labor"
        },
        {
         "code": "73.21",
         "name": "Internal and combined version without extraction"
        },
        {
         "code": "73.22",
         "name": "Internal and combined version with extraction"
        },
        {
         "code": "73.3",
         "name": "Failed forceps"
        },
        {
         "code": "73.4",
         "name": "Medical induction of labor"
        },
        {
         "code": "73.51",
         "name": "Manual rotation of fetal head"
        },
        {
         "code": "73.59",
         "name": "Other manually assisted delivery"
        },
        {
         "code": "73.6",
         "name": "Episiotomy"
        },
        {
         "code": "73.8",
         "name": "Operations on fetus to facilitate delivery"
        },
        {
         "code": "73.91",
         "name": "External version assisting delivery"
        },
        {
         "code": "73.92",
         "name": "Replacement of prolapsed umbilical cord"
        },
        {
         "code": "73.93",
         "name": "Incision of cervix to assist delivery"
        },
        {
         "code": "73.94",
         "name": "Pubiotomy to assist delivery"
        },
        {
         "code": "73.99",
         "name": "Other operations assisting delivery"
        },
        {
         "code": "74.0",
         "name": "Classical cesarean section"
        },
        {
         "code": "74.1",
         "name": "Low cervical cesarean section"
        },
        {
         "code": "74.2",
         "name": "Extraperitoneal cesarean section"
        },
        {
         "code": "74.3",
         "name": "Removal of extratubal ectopic pregnancy"
        },
        {
         "code": "74.4",
         "name": "Cesarean section of other specified type"
        },
        {
         "code": "74.91",
         "name": "Hysterotomy to terminate pregnancy"
        },
        {
         "code": "74.99",
         "name": "Other cesarean section of unspecified type"
        },
        {
         "code": "75.0",
         "name": "Intra-amniotic injection for abortion"
        },
        {
         "code": "75.1",
         "name": "Diagnostic amniocentesis"
        },
        {
         "code": "75.2",
         "name": "Intrauterine transfusion"
        },
        {
         "code": "75.31",
         "name": "Amnioscopy"
        },
        {
         "code": "75.32",
         "name": "Fetal EKG (scalp)"
        },
        {
         "code": "75.33",
         "name": "Fetal blood sampling and biopsy"
        },
        {
         "code": "75.34",
         "name": "Other fetal monitoring"
        },
        {
         "code": "75.35",
         "name": "Other diagnostic procedures on fetus and amnion"
        },
        {
         "code": "75.36",
         "name": "Correction of fetal defect"
        },
        {
         "code": "75.37",
         "name": "Amnioinfusion"
        },
        {
         "code": "75.38",
         "name": "Fetal pulse oximetry"
        },
        {
         "code": "75.4",
         "name": "Manual removal of retained placenta"
        },
        {
         "code": "75.50",
         "name": "Repair of current obstetric laceration of uterus, not otherwise specified"
        },
        {
         "code": "75.51",
         "name": "Repair of current obstetric laceration of cervix"
        },
        {
         "code": "75.52",
         "name": "Repair of current obstetric laceration of corpus uteri"
        },
        {
         "code": "75.61",
         "name": "Repair of current obstetric laceration of bladder and urethra"
        },
        {
         "code": "75.62",
         "name": "Repair of current obstetric laceration of rectum and sphincter ani"
        },
        {
         "code": "75.69",
         "name": "Repair of other current obstetric laceration"
        },
        {
         "code": "75.7",
         "name": "Manual exploration of uterine cavity, postpartum"
        },
        {
         "code": "75.8",
         "name": "Obstetric tamponade of uterus or vagina"
        },
        {
         "code": "75.91",
         "name": "Evacuation of obstetrical incisional hematoma of perineum"
        },
        {
         "code": "75.92",
         "name": "Evacuation of other hematoma of vulva or vagina"
        },
        {
         "code": "75.93",
         "name": "Surgical correction of inverted uterus"
        },
        {
         "code": "75.94",
         "name": "Immediate postpartum manual replacement of inverted uterus"
        },
        {
         "code": "75.99",
         "name": "Other obstetric operations"
        },
        {
         "code": "76.01",
         "name": "Sequestrectomy of facial bone"
        },
        {
         "code": "76.09",
         "name": "Other incision of facial bone"
        },
        {
         "code": "76.11",
         "name": "Biopsy of facial bone"
        },
        {
         "code": "76.19",
         "name": "Other diagnostic procedures on facial bones and joints"
        },
        {
         "code": "76.2",
         "name": "Local excision or destruction of lesion of facial bone"
        },
        {
         "code": "76.31",
         "name": "Partial mandibulectomy"
        },
        {
         "code": "76.39",
         "name": "Partial ostectomy of other facial bone"
        },
        {
         "code": "76.41",
         "name": "Total mandibulectomy with synchronous reconstruction"
        },
        {
         "code": "76.42",
         "name": "Other total mandibulectomy"
        },
        {
         "code": "76.43",
         "name": "Other reconstruction of mandible"
        },
        {
         "code": "76.44",
         "name": "Total ostectomy of other facial bone with synchronous reconstruction"
        },
        {
         "code": "76.45",
         "name": "Other total ostectomy of other facial bone"
        },
        {
         "code": "76.46",
         "name": "Other reconstruction of other facial bone"
        },
        {
         "code": "76.5",
         "name": "Temporomandibular arthroplasty"
        },
        {
         "code": "76.61",
         "name": "Closed osteoplasty [osteotomy] of mandibular ramus"
        },
        {
         "code": "76.62",
         "name": "Open osteoplasty [osteotomy] of mandibular ramus"
        },
        {
         "code": "76.63",
         "name": "Osteoplasty [osteotomy] of body of mandible"
        },
        {
         "code": "76.64",
         "name": "Other orthognathic surgery on mandible"
        },
        {
         "code": "76.65",
         "name": "Segmental osteoplasty [osteotomy] of maxilla"
        },
        {
         "code": "76.66",
         "name": "Total osteoplasty [osteotomy] of maxilla"
        },
        {
         "code": "76.67",
         "name": "Reduction genioplasty"
        },
        {
         "code": "76.68",
         "name": "Augmentation genioplasty"
        },
        {
         "code": "76.69",
         "name": "Other facial bone repair"
        },
        {
         "code": "76.70",
         "name": "Reduction of facial fracture, not otherwise specified"
        },
        {
         "code": "76.71",
         "name": "Closed reduction of malar and zygomatic fracture"
        },
        {
         "code": "76.72",
         "name": "Open reduction of malar and zygomatic fracture"
        },
        {
         "code": "76.73",
         "name": "Closed reduction of maxillary fracture"
        },
        {
         "code": "76.74",
         "name": "Open reduction of maxillary fracture"
        },
        {
         "code": "76.75",
         "name": "Closed reduction of mandibular fracture"
        },
        {
         "code": "76.76",
         "name": "Open reduction of mandibular fracture"
        },
        {
         "code": "76.77",
         "name": "Open reduction of alveolar fracture"
        },
        {
         "code": "76.78",
         "name": "Other closed reduction of facial fracture"
        },
        {
         "code": "76.79",
         "name": "Other open reduction of facial fracture"
        },
        {
         "code": "76.91",
         "name": "Bone graft to facial bone"
        },
        {
         "code": "76.92",
         "name": "Insertion of synthetic implant in facial bone"
        },
        {
         "code": "76.93",
         "name": "Closed reduction of temporomandibular dislocation"
        },
        {
         "code": "76.94",
         "name": "Open reduction of temporomandibular dislocation"
        },
        {
         "code": "76.95",
         "name": "Other manipulation of temporomandibular joint"
        },
        {
         "code": "76.96",
         "name": "Injection of therapeutic substance into temporomandibular joint"
        },
        {
         "code": "76.97",
         "name": "Removal of internal fixation device from facial bone"
        },
        {
         "code": "76.99",
         "name": "Other operations on facial bones and joints"
        },
        {
         "code": "77.00",
         "name": "Sequestrectomy, unspecified site"
        },
        {
         "code": "77.01",
         "name": "Sequestrectomy, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "77.02",
         "name": "Sequestrectomy, humerus"
        },
        {
         "code": "77.03",
         "name": "Sequestrectomy, radius and ulna"
        },
        {
         "code": "77.04",
         "name": "Sequestrectomy, carpals and metacarpals"
        },
        {
         "code": "77.05",
         "name": "Sequestrectomy, femur"
        },
        {
         "code": "77.06",
         "name": "Sequestrectomy, patella"
        },
        {
         "code": "77.07",
         "name": "Sequestrectomy, tibia and fibula"
        },
        {
         "code": "77.08",
         "name": "Sequestrectomy, tarsals and metatarsals"
        },
        {
         "code": "77.09",
         "name": "Sequestrectomy, other bones"
        },
        {
         "code": "77.10",
         "name": "Other incision of bone without division, unspecified site"
        },
        {
         "code": "77.11",
         "name": "Other incision of bone without division, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "77.12",
         "name": "Other incision of bone without division, humerus"
        },
        {
         "code": "77.13",
         "name": "Other incision of bone without division, radius and ulna"
        },
        {
         "code": "77.14",
         "name": "Other incision of bone without division, carpals and metacarpals"
        },
        {
         "code": "77.15",
         "name": "Other incision of bone without division, femur"
        },
        {
         "code": "77.16",
         "name": "Other incision of bone without division, patella"
        },
        {
         "code": "77.17",
         "name": "Other incision of bone without division, tibia and fibula"
        },
        {
         "code": "77.18",
         "name": "Other incision of bone without division, tarsals and metatarsals"
        },
        {
         "code": "77.19",
         "name": "Other incision of bone without division, other bones"
        },
        {
         "code": "77.20",
         "name": "Wedge osteotomy, unspecified site"
        },
        {
         "code": "77.21",
         "name": "Wedge osteotomy, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "77.22",
         "name": "Wedge osteotomy, humerus"
        },
        {
         "code": "77.23",
         "name": "Wedge osteotomy, radius and ulna"
        },
        {
         "code": "77.24",
         "name": "Wedge osteotomy, carpals and metacarpals"
        },
        {
         "code": "77.25",
         "name": "Wedge osteotomy, femur"
        },
        {
         "code": "77.26",
         "name": "Wedge osteotomy, patella"
        },
        {
         "code": "77.27",
         "name": "Wedge osteotomy, tibia and fibula"
        },
        {
         "code": "77.28",
         "name": "Wedge osteotomy, tarsals and metatarsals"
        },
        {
         "code": "77.29",
         "name": "Wedge osteotomy, other bones"
        },
        {
         "code": "77.30",
         "name": "Other division of bone, unspecified site"
        },
        {
         "code": "77.31",
         "name": "Other division of bone, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "77.32",
         "name": "Other division of bone, humerus"
        },
        {
         "code": "77.33",
         "name": "Other division of bone, radius and ulna"
        },
        {
         "code": "77.34",
         "name": "Other division of bone, carpals and metacarpals"
        },
        {
         "code": "77.35",
         "name": "Other division of bone, femur"
        },
        {
         "code": "77.36",
         "name": "Other division of bone, patella"
        },
        {
         "code": "77.37",
         "name": "Other division of bone, tibia and fibula"
        },
        {
         "code": "77.38",
         "name": "Other division of bone, tarsals and metatarsals"
        },
        {
         "code": "77.39",
         "name": "Other division of bone, other bones"
        },
        {
         "code": "77.40",
         "name": "Biopsy of bone, unspecified site"
        },
        {
         "code": "77.41",
         "name": "Biopsy of bone, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "77.42",
         "name": "Biopsy of bone, humerus"
        },
        {
         "code": "77.43",
         "name": "Biopsy of bone, radius and ulna"
        },
        {
         "code": "77.44",
         "name": "Biopsy of bone, carpals and metacarpals"
        },
        {
         "code": "77.45",
         "name": "Biopsy of bone, femur"
        },
        {
         "code": "77.46",
         "name": "Biopsy of bone, patella"
        },
        {
         "code": "77.47",
         "name": "Biopsy of bone, tibia and fibula"
        },
        {
         "code": "77.48",
         "name": "Biopsy of bone, tarsals and metatarsals"
        },
        {
         "code": "77.49",
         "name": "Biopsy of bone, other bones"
        },
        {
         "code": "77.51",
         "name": "Bunionectomy with soft tissue correction and osteotomy of the first metatarsal"
        },
        {
         "code": "77.52",
         "name": "Bunionectomy with soft tissue correction and arthrodesis"
        },
        {
         "code": "77.53",
         "name": "Other bunionectomy with soft tissue correction"
        },
        {
         "code": "77.54",
         "name": "Excision or correction of bunionette"
        },
        {
         "code": "77.56",
         "name": "Repair of hammer toe"
        },
        {
         "code": "77.57",
         "name": "Repair of claw toe"
        },
        {
         "code": "77.58",
         "name": "Other excision, fusion and repair of toes"
        },
        {
         "code": "77.59",
         "name": "Other bunionectomy"
        },
        {
         "code": "77.60",
         "name": "Local excision of lesion or tissue of bone, unspecified site"
        },
        {
         "code": "77.61",
         "name": "Local excision of lesion or tissue of bone, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "77.62",
         "name": "Local excision of lesion or tissue of bone, humerus"
        },
        {
         "code": "77.63",
         "name": "Local excision of lesion or tissue of bone, radius and ulna"
        },
        {
         "code": "77.64",
         "name": "Local excision of lesion or tissue of bone, carpals and metacarpals"
        },
        {
         "code": "77.65",
         "name": "Local excision of lesion or tissue of bone, femur"
        },
        {
         "code": "77.66",
         "name": "Local excision of lesion or tissue of bone, patella"
        },
        {
         "code": "77.67",
         "name": "Local excision of lesion or tissue of bone, tibia and fibula"
        },
        {
         "code": "77.68",
         "name": "Local excision of lesion or tissue of bone, tarsals and metatarsals"
        },
        {
         "code": "77.69",
         "name": "Local excision of lesion or tissue of bone, other bones"
        },
        {
         "code": "77.70",
         "name": "Excision of bone for graft, unspecified site"
        },
        {
         "code": "77.71",
         "name": "Excision of bone for graft, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "77.72",
         "name": "Excision of bone for graft, humerus"
        },
        {
         "code": "77.73",
         "name": "Excision of bone for graft, radius and ulna"
        },
        {
         "code": "77.74",
         "name": "Excision of bone for graft, carpals and metacarpals"
        },
        {
         "code": "77.75",
         "name": "Excision of bone for graft, femur"
        },
        {
         "code": "77.76",
         "name": "Excision of bone for graft, patella"
        },
        {
         "code": "77.77",
         "name": "Excision of bone for graft, tibia and fibula"
        },
        {
         "code": "77.78",
         "name": "Excision of bone for graft, tarsals and metatarsals"
        },
        {
         "code": "77.79",
         "name": "Excision of bone for graft, other bones"
        },
        {
         "code": "77.80",
         "name": "Other partial ostectomy, unspecified site"
        },
        {
         "code": "77.81",
         "name": "Other partial ostectomy, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "77.82",
         "name": "Other partial ostectomy, humerus"
        },
        {
         "code": "77.83",
         "name": "Other partial ostectomy, radius and ulna"
        },
        {
         "code": "77.84",
         "name": "Other partial ostectomy, carpals and metacarpals"
        },
        {
         "code": "77.85",
         "name": "Other partial ostectomy, femur"
        },
        {
         "code": "77.86",
         "name": "Other partial ostectomy, patella"
        },
        {
         "code": "77.87",
         "name": "Other partial ostectomy, tibia and fibula"
        },
        {
         "code": "77.88",
         "name": "Other partial ostectomy, tarsals and metatarsals"
        },
        {
         "code": "77.89",
         "name": "Other partial ostectomy, other bones"
        },
        {
         "code": "77.90",
         "name": "Total ostectomy, unspecified site"
        },
        {
         "code": "77.91",
         "name": "Total ostectomy, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "77.92",
         "name": "Total ostectomy, humerus"
        },
        {
         "code": "77.93",
         "name": "Total ostectomy, radius and ulna"
        },
        {
         "code": "77.94",
         "name": "Total ostectomy, carpals and metacarpals"
        },
        {
         "code": "77.95",
         "name": "Total ostectomy, femur"
        },
        {
         "code": "77.96",
         "name": "Total ostectomy, patella"
        },
        {
         "code": "77.97",
         "name": "Total ostectomy, tibia and fibula"
        },
        {
         "code": "77.98",
         "name": "Total ostectomy, tarsals and metatarsals"
        },
        {
         "code": "77.99",
         "name": "Total ostectomy, other bones"
        },
        {
         "code": "78.00",
         "name": "Bone graft, unspecified site"
        },
        {
         "code": "78.01",
         "name": "Bone graft, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "78.02",
         "name": "Bone graft, humerus"
        },
        {
         "code": "78.03",
         "name": "Bone graft, radius and ulna"
        },
        {
         "code": "78.04",
         "name": "Bone graft, carpals and metacarpals"
        },
        {
         "code": "78.05",
         "name": "Bone graft, femur"
        },
        {
         "code": "78.06",
         "name": "Bone graft, patella"
        },
        {
         "code": "78.07",
         "name": "Bone graft, tibia and fibula"
        },
        {
         "code": "78.08",
         "name": "Bone graft, tarsals and metatarsals"
        },
        {
         "code": "78.09",
         "name": "Bone graft, other bones"
        },
        {
         "code": "78.10",
         "name": "Application of external fixator device, unspecified site"
        },
        {
         "code": "78.11",
         "name": "Application of external fixator device, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "78.12",
         "name": "Application of external fixator device, humerus"
        },
        {
         "code": "78.13",
         "name": "Application of external fixator device, radius and ulna"
        },
        {
         "code": "78.14",
         "name": "Application of external fixator device, carpals and metacarpals"
        },
        {
         "code": "78.15",
         "name": "Application of external fixator device, femur"
        },
        {
         "code": "78.16",
         "name": "Application of external fixator device, patella"
        },
        {
         "code": "78.17",
         "name": "Application of external fixator device, tibia and fibula"
        },
        {
         "code": "78.18",
         "name": "Application of external fixator device, tarsals and metatarsals"
        },
        {
         "code": "78.19",
         "name": "Application of external fixator device, other bones"
        },
        {
         "code": "78.20",
         "name": "Limb shortening procedures, unspecified site"
        },
        {
         "code": "78.22",
         "name": "Limb shortening procedures, humerus"
        },
        {
         "code": "78.23",
         "name": "Limb shortening procedures, radius and ulna"
        },
        {
         "code": "78.24",
         "name": "Limb shortening procedures, carpals and metacarpals"
        },
        {
         "code": "78.25",
         "name": "Limb shortening procedures, femur"
        },
        {
         "code": "78.27",
         "name": "Limb shortening procedures, tibia and fibula"
        },
        {
         "code": "78.28",
         "name": "Limb shortening procedures, tarsals and metatarsals"
        },
        {
         "code": "78.29",
         "name": "Limb shortening procedures, other bones"
        },
        {
         "code": "78.30",
         "name": "Limb lengthening procedures, unspecified site"
        },
        {
         "code": "78.32",
         "name": "Limb lengthening procedures, humerus"
        },
        {
         "code": "78.33",
         "name": "Limb lengthening procedures, radius and ulna"
        },
        {
         "code": "78.34",
         "name": "Limb lengthening procedures, carpals and metacarpals"
        },
        {
         "code": "78.35",
         "name": "Limb lengthening procedures, femur"
        },
        {
         "code": "78.37",
         "name": "Limb lengthening procedures, tibia and fibula"
        },
        {
         "code": "78.38",
         "name": "Limb lengthening procedures, tarsals and metatarsals"
        },
        {
         "code": "78.39",
         "name": "Limb lengthening procedures, other bones"
        },
        {
         "code": "78.40",
         "name": "Other repair or plastic operations on bone, unspecified site"
        },
        {
         "code": "78.41",
         "name": "Other repair or plastic operations on bone, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "78.42",
         "name": "Other repair or plastic operations on bone, humerus"
        },
        {
         "code": "78.43",
         "name": "Other repair or plastic operations on bone, radius and ulna"
        },
        {
         "code": "78.44",
         "name": "Other repair or plastic operations on bone, carpals and metacarpals"
        },
        {
         "code": "78.45",
         "name": "Other repair or plastic operations on bone, femur"
        },
        {
         "code": "78.46",
         "name": "Other repair or plastic operations on bone, patella"
        },
        {
         "code": "78.47",
         "name": "Other repair or plastic operations on bone, tibia and fibula"
        },
        {
         "code": "78.48",
         "name": "Other repair or plastic operations on bone, tarsals and metatarsals"
        },
        {
         "code": "78.49",
         "name": "Other repair or plastic operations on bone, other bones"
        },
        {
         "code": "78.50",
         "name": "Internal fixation of bone without fracture reduction, unspecified site"
        },
        {
         "code": "78.51",
         "name": "Internal fixation of bone without fracture reduction, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "78.52",
         "name": "Internal fixation of bone without fracture reduction, humerus"
        },
        {
         "code": "78.53",
         "name": "Internal fixation of bone without fracture reduction, radius and ulna"
        },
        {
         "code": "78.54",
         "name": "Internal fixation of bone without fracture reduction, carpals and metacarpals"
        },
        {
         "code": "78.55",
         "name": "Internal fixation of bone without fracture reduction, femur"
        },
        {
         "code": "78.56",
         "name": "Internal fixation of bone without fracture reduction, patella"
        },
        {
         "code": "78.57",
         "name": "Internal fixation of bone without fracture reduction, tibia and fibula"
        },
        {
         "code": "78.58",
         "name": "Internal fixation of bone without fracture reduction, tarsals and metatarsals"
        },
        {
         "code": "78.59",
         "name": "Internal fixation of bone without fracture reduction, other bones"
        },
        {
         "code": "78.60",
         "name": "Removal of implanted devices from bone, unspecified site"
        },
        {
         "code": "78.61",
         "name": "Removal of implanted devices from bone, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "78.62",
         "name": "Removal of implanted devices from bone, humerus"
        },
        {
         "code": "78.63",
         "name": "Removal of implanted devices from bone, radius and ulna"
        },
        {
         "code": "78.64",
         "name": "Removal of implanted devices from bone, carpals and metacarpals"
        },
        {
         "code": "78.65",
         "name": "Removal of implanted devices from bone, femur"
        },
        {
         "code": "78.66",
         "name": "Removal of implanted devices from bone, patella"
        },
        {
         "code": "78.67",
         "name": "Removal of implanted devices from bone, tibia and fibula"
        },
        {
         "code": "78.68",
         "name": "Removal of implanted devices from bone, tarsals and metatarsals"
        },
        {
         "code": "78.69",
         "name": "Removal of implanted devices from bone, other bones"
        },
        {
         "code": "78.70",
         "name": "Osteoclasis, unspecified site"
        },
        {
         "code": "78.71",
         "name": "Osteoclasis, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "78.72",
         "name": "Osteoclasis, humerus"
        },
        {
         "code": "78.73",
         "name": "Osteoclasis, radius and ulna"
        },
        {
         "code": "78.74",
         "name": "Osteoclasis, carpals and metacarpals"
        },
        {
         "code": "78.75",
         "name": "Osteoclasis, femur"
        },
        {
         "code": "78.76",
         "name": "Osteoclasis, patella"
        },
        {
         "code": "78.77",
         "name": "Osteoclasis, tibia and fibula"
        },
        {
         "code": "78.78",
         "name": "Osteoclasis, tarsals and metatarsals"
        },
        {
         "code": "78.79",
         "name": "Osteoclasis, other bones"
        },
        {
         "code": "78.80",
         "name": "Diagnostic procedures on bone, not elsewhere classified, unspecified site"
        },
        {
         "code": "78.81",
         "name": "Diagnostic procedures on bone, not elsewhere classified, scapula, clavicle, and thorax [ribs and sternum]"
        },
        {
         "code": "78.82",
         "name": "Diagnostic procedures on bone, not elsewhere classified, humerus"
        },
        {
         "code": "78.83",
         "name": "Diagnostic procedures on bone, not elsewhere classified, radius and ulna"
        },
        {
         "code": "78.84",
         "name": "Diagnostic procedures on bone, not elsewhere classified, carpals and metacarpals"
        },
        {
         "code": "78.85",
         "name": "Diagnostic procedures on bone, not elsewhere classified, femur"
        },
        {
         "code": "78.86",
         "name": "Diagnostic procedures on bone, not elsewhere classified, patella"
        },
        {
         "code": "78.87",
         "name": "Diagnostic procedures on bone, not elsewhere classified, tibia and fibula"
        },
        {
         "code": "78.88",
         "name": "Diagnostic procedures on bone, not elsewhere classified, tarsals and metatarsals"
        },
        {
         "code": "78.89",
         "name": "Diagnostic procedures on bone, not elsewhere classified, other bones"
        },
        {
         "code": "78.90",
         "name": "Insertion of bone growth stimulator, unspecified site"
        },
        {
         "code": "78.91",
         "name": "Insertion of bone growth stimulator, scapula, clavicle and thorax [ribs and sternum]"
        },
        {
         "code": "78.92",
         "name": "Insertion of bone growth stimulator, humerus"
        },
        {
         "code": "78.93",
         "name": "Insertion of bone growth stimulator, radius and ulna"
        },
        {
         "code": "78.94",
         "name": "Insertion of bone growth stimulator, carpals and metacarpals"
        },
        {
         "code": "78.95",
         "name": "Insertion of bone growth stimulator, femur"
        },
        {
         "code": "78.96",
         "name": "Insertion of bone growth stimulator, patella"
        },
        {
         "code": "78.97",
         "name": "Insertion of bone growth stimulator, tibia and fibula"
        },
        {
         "code": "78.98",
         "name": "Insertion of bone growth stimulator, tarsals and metatarsals"
        },
        {
         "code": "78.99",
         "name": "Insertion of bone growth stimulator, other bones"
        },
        {
         "code": "79.00",
         "name": "Closed reduction of fracture without internal fixation, unspecified site"
        },
        {
         "code": "79.01",
         "name": "Closed reduction of fracture without internal fixation, humerus"
        },
        {
         "code": "79.02",
         "name": "Closed reduction of fracture without internal fixation, radius and ulna"
        },
        {
         "code": "79.03",
         "name": "Closed reduction of fracture without internal fixation, carpals and metacarpals"
        },
        {
         "code": "79.04",
         "name": "Closed reduction of fracture without internal fixation, phalanges of hand"
        },
        {
         "code": "79.05",
         "name": "Closed reduction of fracture without internal fixation, femur"
        },
        {
         "code": "79.06",
         "name": "Closed reduction of fracture without internal fixation, tibia and fibula"
        },
        {
         "code": "79.07",
         "name": "Closed reduction of fracture without internal fixation, tarsals and metatarsals"
        },
        {
         "code": "79.08",
         "name": "Closed reduction of fracture without internal fixation, phalanges of foot"
        },
        {
         "code": "79.09",
         "name": "Closed reduction of fracture without internal fixation, other specified bone"
        },
        {
         "code": "79.10",
         "name": "Closed reduction of fracture with internal fixation, unspecified site"
        },
        {
         "code": "79.11",
         "name": "Closed reduction of fracture with internal fixation, humerus"
        },
        {
         "code": "79.12",
         "name": "Closed reduction of fracture with internal fixation, radius and ulna"
        },
        {
         "code": "79.13",
         "name": "Closed reduction of fracture with internal fixation, carpals and metacarpals"
        },
        {
         "code": "79.14",
         "name": "Closed reduction of fracture with internal fixation, phalanges of hand"
        },
        {
         "code": "79.15",
         "name": "Closed reduction of fracture with internal fixation, femur"
        },
        {
         "code": "79.16",
         "name": "Closed reduction of fracture with internal fixation, tibia and fibula"
        },
        {
         "code": "79.17",
         "name": "Closed reduction of fracture with internal fixation, tarsals and metatarsals"
        },
        {
         "code": "79.18",
         "name": "Closed reduction of fracture with internal fixation, phalanges of foot"
        },
        {
         "code": "79.19",
         "name": "Closed reduction of fracture with internal fixation, other specified bone"
        },
        {
         "code": "79.20",
         "name": "Open reduction of fracture without internal fixation, unspecified site"
        },
        {
         "code": "79.21",
         "name": "Open reduction of fracture without internal fixation, humerus"
        },
        {
         "code": "79.22",
         "name": "Open reduction of fracture without internal fixation, radius and ulna"
        },
        {
         "code": "79.23",
         "name": "Open reduction of fracture without internal fixation, carpals and metacarpals"
        },
        {
         "code": "79.24",
         "name": "Open reduction of fracture without internal fixation, phalanges of hand"
        },
        {
         "code": "79.25",
         "name": "Open reduction of fracture without internal fixation, femur"
        },
        {
         "code": "79.26",
         "name": "Open reduction of fracture without internal fixation, tibia and fibula"
        },
        {
         "code": "79.27",
         "name": "Open reduction of fracture without internal fixation, tarsals and metatarsals"
        },
        {
         "code": "79.28",
         "name": "Open reduction of fracture without internal fixation, phalanges of foot"
        },
        {
         "code": "79.29",
         "name": "Open reduction of fracture without internal fixation, other specified bone"
        },
        {
         "code": "79.30",
         "name": "Open reduction of fracture with internal fixation, unspecified site"
        },
        {
         "code": "79.31",
         "name": "Open reduction of fracture with internal fixation, humerus"
        },
        {
         "code": "79.32",
         "name": "Open reduction of fracture with internal fixation, radius and ulna"
        },
        {
         "code": "79.33",
         "name": "Open reduction of fracture with internal fixation, carpals and metacarpals"
        },
        {
         "code": "79.34",
         "name": "Open reduction of fracture with internal fixation, phalanges of hand"
        },
        {
         "code": "79.35",
         "name": "Open reduction of fracture with internal fixation, femur"
        },
        {
         "code": "79.36",
         "name": "Open reduction of fracture with internal fixation, tibia and fibula"
        },
        {
         "code": "79.37",
         "name": "Open reduction of fracture with internal fixation, tarsals and metatarsals"
        },
        {
         "code": "79.38",
         "name": "Open reduction of fracture with internal fixation, phalanges of foot"
        },
        {
         "code": "79.39",
         "name": "Open reduction of fracture with internal fixation, other specified bone"
        },
        {
         "code": "79.40",
         "name": "Closed reduction of separated epiphysis, unspecified site"
        },
        {
         "code": "79.41",
         "name": "Closed reduction of separated epiphysis, humerus"
        },
        {
         "code": "79.42",
         "name": "Closed reduction of separated epiphysis, radius and ulna"
        },
        {
         "code": "79.45",
         "name": "Closed reduction of separated epiphysis, femur"
        },
        {
         "code": "79.46",
         "name": "Closed reduction of separated epiphysis, tibia and fibula"
        },
        {
         "code": "79.49",
         "name": "Closed reduction of separated epiphysis, other specified bone"
        },
        {
         "code": "79.50",
         "name": "Open reduction of separated epiphysis, unspecified site"
        },
        {
         "code": "79.51",
         "name": "Open reduction of separated epiphysis, humerus"
        },
        {
         "code": "79.52",
         "name": "Open reduction of separated epiphysis, radius and ulna"
        },
        {
         "code": "79.55",
         "name": "Open reduction of separated epiphysis, femur"
        },
        {
         "code": "79.56",
         "name": "Open reduction of separated epiphysis, tibia and fibula"
        },
        {
         "code": "79.59",
         "name": "Open reduction of separated epiphysis, other specified bone"
        },
        {
         "code": "79.60",
         "name": "Debridement of open fracture, unspecified site"
        },
        {
         "code": "79.61",
         "name": "Debridement of open fracture site, humerus"
        },
        {
         "code": "79.62",
         "name": "Debridement of open fracture site, radius and ulna"
        },
        {
         "code": "79.63",
         "name": "Debridement of open fracture site, carpals and metacarpals"
        },
        {
         "code": "79.64",
         "name": "Debridement of open fracture site, phalanges of hand"
        },
        {
         "code": "79.65",
         "name": "Debridement of open fracture site, femur"
        },
        {
         "code": "79.66",
         "name": "Debridement of open fracture site, tibia and fibula"
        },
        {
         "code": "79.67",
         "name": "Debridement of open fracture site, tarsals and metatarsals"
        },
        {
         "code": "79.68",
         "name": "Debridement of open fracture site, phalanges of foot"
        },
        {
         "code": "79.69",
         "name": "Debridement of open fracture site, other specified bone"
        },
        {
         "code": "79.70",
         "name": "Closed reduction of dislocation of unspecified site"
        },
        {
         "code": "79.71",
         "name": "Closed reduction of dislocation of shoulder"
        },
        {
         "code": "79.72",
         "name": "Closed reduction of dislocation of elbow"
        },
        {
         "code": "79.73",
         "name": "Closed reduction of dislocation of wrist"
        },
        {
         "code": "79.74",
         "name": "Closed reduction of dislocation of hand and finger"
        },
        {
         "code": "79.75",
         "name": "Closed reduction of dislocation of hip"
        },
        {
         "code": "79.76",
         "name": "Closed reduction of dislocation of knee"
        },
        {
         "code": "79.77",
         "name": "Closed reduction of dislocation of ankle"
        },
        {
         "code": "79.78",
         "name": "Closed reduction of dislocation of foot and toe"
        },
        {
         "code": "79.79",
         "name": "Closed reduction of dislocation of other specified sites"
        },
        {
         "code": "79.80",
         "name": "Open reduction of dislocation of unspecified site"
        },
        {
         "code": "79.81",
         "name": "Open reduction of dislocation of shoulder"
        },
        {
         "code": "79.82",
         "name": "Open reduction of dislocation of elbow"
        },
        {
         "code": "79.83",
         "name": "Open reduction of dislocation of wrist"
        },
        {
         "code": "79.84",
         "name": "Open reduction of dislocation of hand and finger"
        },
        {
         "code": "79.85",
         "name": "Open reduction of dislocation of hip"
        },
        {
         "code": "79.86",
         "name": "Open reduction of dislocation of knee"
        },
        {
         "code": "79.87",
         "name": "Open reduction of dislocation of ankle"
        },
        {
         "code": "79.88",
         "name": "Open reduction of dislocation of foot and toe"
        },
        {
         "code": "79.89",
         "name": "Open reduction of dislocation of other specified sites"
        },
        {
         "code": "79.90",
         "name": "Unspecified operation on bone injury, unspecified site"
        },
        {
         "code": "79.91",
         "name": "Unspecified operation on bone injury, humerus"
        },
        {
         "code": "79.92",
         "name": "Unspecified operation on bone injury, radius and ulna"
        },
        {
         "code": "79.93",
         "name": "Unspecified operation on bone injury, carpals and metacarpals"
        },
        {
         "code": "79.94",
         "name": "Unspecified operation on bone injury, phalanges of hand"
        },
        {
         "code": "79.95",
         "name": "Unspecified operation on bone injury, femur"
        },
        {
         "code": "79.96",
         "name": "Unspecified operation on bone injury, tibia and fibula"
        },
        {
         "code": "79.97",
         "name": "Unspecified operation on bone injury, tarsals and metatarsals"
        },
        {
         "code": "79.98",
         "name": "Unspecified operation on bone injury, phalanges of foot"
        },
        {
         "code": "79.99",
         "name": "Unspecified operation on bone injury, other specified bone"
        },
        {
         "code": "80.00",
         "name": "Arthrotomy for removal of prosthesis without replacement, unspecified site"
        },
        {
         "code": "80.01",
         "name": "Arthrotomy for removal of prosthesis without replacement, shoulder"
        },
        {
         "code": "80.02",
         "name": "Arthrotomy for removal of prosthesis without replacement, elbow"
        },
        {
         "code": "80.03",
         "name": "Arthrotomy for removal of prosthesis without replacement, wrist"
        },
        {
         "code": "80.04",
         "name": "Arthrotomy for removal of prosthesis without replacement, hand and finger"
        },
        {
         "code": "80.05",
         "name": "Arthrotomy for removal of prosthesis without replacement, hip"
        },
        {
         "code": "80.06",
         "name": "Arthrotomy for removal of prosthesis without replacement, knee"
        },
        {
         "code": "80.07",
         "name": "Arthrotomy for removal of prosthesis without replacement, ankle"
        },
        {
         "code": "80.08",
         "name": "Arthrotomy for removal of prosthesis without replacement, foot and toe"
        },
        {
         "code": "80.09",
         "name": "Arthrotomy for removal of prosthesis without replacement, other specified sites"
        },
        {
         "code": "80.10",
         "name": "Other arthrotomy, unspecified site"
        },
        {
         "code": "80.11",
         "name": "Other arthrotomy, shoulder"
        },
        {
         "code": "80.12",
         "name": "Other arthrotomy, elbow"
        },
        {
         "code": "80.13",
         "name": "Other arthrotomy, wrist"
        },
        {
         "code": "80.14",
         "name": "Other arthrotomy, hand and finger"
        },
        {
         "code": "80.15",
         "name": "Other arthrotomy, hip"
        },
        {
         "code": "80.16",
         "name": "Other arthrotomy, knee"
        },
        {
         "code": "80.17",
         "name": "Other arthrotomy, ankle"
        },
        {
         "code": "80.18",
         "name": "Other arthrotomy, foot and toe"
        },
        {
         "code": "80.19",
         "name": "Other arthrotomy, other specified sites"
        },
        {
         "code": "80.20",
         "name": "Arthroscopy, unspecified site"
        },
        {
         "code": "80.21",
         "name": "Arthroscopy, shoulder"
        },
        {
         "code": "80.22",
         "name": "Arthroscopy, elbow"
        },
        {
         "code": "80.23",
         "name": "Arthroscopy, wrist"
        },
        {
         "code": "80.24",
         "name": "Arthroscopy, hand and finger"
        },
        {
         "code": "80.25",
         "name": "Arthroscopy, hip"
        },
        {
         "code": "80.26",
         "name": "Arthroscopy, knee"
        },
        {
         "code": "80.27",
         "name": "Arthroscopy, ankle"
        },
        {
         "code": "80.28",
         "name": "Arthroscopy, foot and toe"
        },
        {
         "code": "80.29",
         "name": "Arthroscopy, other specified sites"
        },
        {
         "code": "80.30",
         "name": "Biopsy of joint structure, unspecified site"
        },
        {
         "code": "80.31",
         "name": "Biopsy of joint structure, shoulder"
        },
        {
         "code": "80.32",
         "name": "Biopsy of joint structure, elbow"
        },
        {
         "code": "80.33",
         "name": "Biopsy of joint structure, wrist"
        },
        {
         "code": "80.34",
         "name": "Biopsy of joint structure, hand and finger"
        },
        {
         "code": "80.35",
         "name": "Biopsy of joint structure, hip"
        },
        {
         "code": "80.36",
         "name": "Biopsy of joint structure, knee"
        },
        {
         "code": "80.37",
         "name": "Biopsy of joint structure, ankle"
        },
        {
         "code": "80.38",
         "name": "Biopsy of joint structure, foot and toe"
        },
        {
         "code": "80.39",
         "name": "Biopsy of joint structure, other specified sites"
        },
        {
         "code": "80.40",
         "name": "Division of joint capsule, ligament, or cartilage, unspecified site"
        },
        {
         "code": "80.41",
         "name": "Division of joint capsule, ligament, or cartilage, shoulder"
        },
        {
         "code": "80.42",
         "name": "Division of joint capsule, ligament, or cartilage, elbow"
        },
        {
         "code": "80.43",
         "name": "Division of joint capsule, ligament, or cartilage, wrist"
        },
        {
         "code": "80.44",
         "name": "Division of joint capsule, ligament, or cartilage, hand and finger"
        },
        {
         "code": "80.45",
         "name": "Division of joint capsule, ligament, or cartilage, hip"
        },
        {
         "code": "80.46",
         "name": "Division of joint capsule, ligament, or cartilage, knee"
        },
        {
         "code": "80.47",
         "name": "Division of joint capsule, ligament, or cartilage, ankle"
        },
        {
         "code": "80.48",
         "name": "Division of joint capsule, ligament, or cartilage, foot and toe"
        },
        {
         "code": "80.49",
         "name": "Division of joint capsule, ligament, or cartilage, other specified sites"
        },
        {
         "code": "80.50",
         "name": "Excision or destruction of intervertebral disc, unspecified"
        },
        {
         "code": "80.51",
         "name": "Excision of intervertebral disc"
        },
        {
         "code": "80.52",
         "name": "Intervertebral chemonucleolysis"
        },
        {
         "code": "80.53",
         "name": "Repair of the anulus fibrosus with graft or prosthesis"
        },
        {
         "code": "80.54",
         "name": "Other and unspecified repair of the anulus fibrosus"
        },
        {
         "code": "80.59",
         "name": "Other destruction of intervertebral disc"
        },
        {
         "code": "80.6",
         "name": "Excision of semilunar cartilage of knee"
        },
        {
         "code": "80.70",
         "name": "Synovectomy, unspecified site"
        },
        {
         "code": "80.71",
         "name": "Synovectomy, shoulder"
        },
        {
         "code": "80.72",
         "name": "Synovectomy, elbow"
        },
        {
         "code": "80.73",
         "name": "Synovectomy, wrist"
        },
        {
         "code": "80.74",
         "name": "Synovectomy, hand and finger"
        },
        {
         "code": "80.75",
         "name": "Synovectomy, hip"
        },
        {
         "code": "80.76",
         "name": "Synovectomy, knee"
        },
        {
         "code": "80.77",
         "name": "Synovectomy, ankle"
        },
        {
         "code": "80.78",
         "name": "Synovectomy, foot and toe"
        },
        {
         "code": "80.79",
         "name": "Synovectomy, other specified sites"
        },
        {
         "code": "80.80",
         "name": "Other local excision or destruction of lesion of joint, unspecified site"
        },
        {
         "code": "80.81",
         "name": "Other local excision or destruction of lesion of joint, shoulder"
        },
        {
         "code": "80.82",
         "name": "Other local excision or destruction of lesion of joint, elbow"
        },
        {
         "code": "80.83",
         "name": "Other local excision or destruction of lesion of joint, wrist"
        },
        {
         "code": "80.84",
         "name": "Other local excision or destruction of lesion of joint, hand and finger"
        },
        {
         "code": "80.85",
         "name": "Other local excision or destruction of lesion of joint, hip"
        },
        {
         "code": "80.86",
         "name": "Other local excision or destruction of lesion of joint, knee"
        },
        {
         "code": "80.87",
         "name": "Other local excision or destruction of lesion of joint, ankle"
        },
        {
         "code": "80.88",
         "name": "Other local excision or destruction of lesion of joint, foot and toe"
        },
        {
         "code": "80.89",
         "name": "Other local excision or destruction of lesion of joint, other specified sites"
        },
        {
         "code": "80.90",
         "name": "Other excision of joint, unspecified site"
        },
        {
         "code": "80.91",
         "name": "Other excision of joint, shoulder"
        },
        {
         "code": "80.92",
         "name": "Other excision of joint, elbow"
        },
        {
         "code": "80.93",
         "name": "Other excision of joint, wrist"
        },
        {
         "code": "80.94",
         "name": "Other excision of joint, hand and finger"
        },
        {
         "code": "80.95",
         "name": "Other excision of joint, hip"
        },
        {
         "code": "80.96",
         "name": "Other excision of joint, knee"
        },
        {
         "code": "80.97",
         "name": "Other excision of joint, ankle"
        },
        {
         "code": "80.98",
         "name": "Other excision of joint, foot and toe"
        },
        {
         "code": "80.99",
         "name": "Other excision of joint, other specified sites"
        },
        {
         "code": "81.00",
         "name": "Spinal fusion, not otherwise specified"
        },
        {
         "code": "81.01",
         "name": "Atlas-axis spinal fusion"
        },
        {
         "code": "81.02",
         "name": "Other cervical fusion of the anterior column, anterior technique"
        },
        {
         "code": "81.03",
         "name": "Other cervical fusion of the posterior column, posterior technique"
        },
        {
         "code": "81.04",
         "name": "Dorsal and dorsolumbar fusion of the anterior column, anterior technique"
        },
        {
         "code": "81.05",
         "name": "Dorsal and dorsolumbar fusion of the posterior column, posterior technique"
        },
        {
         "code": "81.06",
         "name": "Lumbar and lumbosacral fusion of the anterior column, anterior technique"
        },
        {
         "code": "81.07",
         "name": "Lumbar and lumbosacral fusion of the posterior column, posterior technique"
        },
        {
         "code": "81.08",
         "name": "Lumbar and lumbosacral fusion of the anterior column, posterior technique"
        },
        {
         "code": "81.11",
         "name": "Ankle fusion"
        },
        {
         "code": "81.12",
         "name": "Triple arthrodesis"
        },
        {
         "code": "81.13",
         "name": "Subtalar fusion"
        },
        {
         "code": "81.14",
         "name": "Midtarsal fusion"
        },
        {
         "code": "81.15",
         "name": "Tarsometatarsal fusion"
        },
        {
         "code": "81.16",
         "name": "Metatarsophalangeal fusion"
        },
        {
         "code": "81.17",
         "name": "Other fusion of foot"
        },
        {
         "code": "81.18",
         "name": "Subtalar joint arthroereisis"
        },
        {
         "code": "81.20",
         "name": "Arthrodesis of unspecified joint"
        },
        {
         "code": "81.21",
         "name": "Arthrodesis of hip"
        },
        {
         "code": "81.22",
         "name": "Arthrodesis of knee"
        },
        {
         "code": "81.23",
         "name": "Arthrodesis of shoulder"
        },
        {
         "code": "81.24",
         "name": "Arthrodesis of elbow"
        },
        {
         "code": "81.25",
         "name": "Carporadial fusion"
        },
        {
         "code": "81.26",
         "name": "Metacarpocarpal fusion"
        },
        {
         "code": "81.27",
         "name": "Metacarpophalangeal fusion"
        },
        {
         "code": "81.28",
         "name": "Interphalangeal fusion"
        },
        {
         "code": "81.29",
         "name": "Arthrodesis of other specified joints"
        },
        {
         "code": "81.30",
         "name": "Refusion of spine, not otherwise specified"
        },
        {
         "code": "81.31",
         "name": "Refusion of atlas-axis spine"
        },
        {
         "code": "81.32",
         "name": "Refusion of other cervical spine, anterior column, anterior technique"
        },
        {
         "code": "81.33",
         "name": "Refusion of other cervical spine, posterior column, posterior technique"
        },
        {
         "code": "81.34",
         "name": "Refusion of dorsal and dorsolumbar spine, anterior column, anterior technique"
        },
        {
         "code": "81.35",
         "name": "Refusion of dorsal and dorsolumbar spine, posterior column, posterior technique"
        },
        {
         "code": "81.36",
         "name": "Refusion of lumbar and lumbosacral spine, anterior column, anterior technique"
        },
        {
         "code": "81.37",
         "name": "Refusion of lumbar and lumbosacral spine, posterior column, posterior technique"
        },
        {
         "code": "81.38",
         "name": "Refusion of lumbar and lumbosacral spine, anterior column, posterior technique"
        },
        {
         "code": "81.39",
         "name": "Refusion of spine, not elsewhere classified"
        },
        {
         "code": "81.40",
         "name": "Repair of hip, not elsewhere classified"
        },
        {
         "code": "81.42",
         "name": "Five-in-one repair of knee"
        },
        {
         "code": "81.43",
         "name": "Triad knee repair"
        },
        {
         "code": "81.44",
         "name": "Patellar stabilization"
        },
        {
         "code": "81.45",
         "name": "Other repair of the cruciate ligaments"
        },
        {
         "code": "81.46",
         "name": "Other repair of the collateral ligaments"
        },
        {
         "code": "81.47",
         "name": "Other repair of knee"
        },
        {
         "code": "81.49",
         "name": "Other repair of ankle"
        },
        {
         "code": "81.51",
         "name": "Total hip replacement"
        },
        {
         "code": "81.52",
         "name": "Partial hip replacement"
        },
        {
         "code": "81.53",
         "name": "Revision of hip replacement, not otherwise specified"
        },
        {
         "code": "81.54",
         "name": "Total knee replacement"
        },
        {
         "code": "81.55",
         "name": "Revision of knee replacement, not otherwise specified"
        },
        {
         "code": "81.56",
         "name": "Total ankle replacement"
        },
        {
         "code": "81.57",
         "name": "Replacement of joint of foot and toe"
        },
        {
         "code": "81.59",
         "name": "Revision of joint replacement of lower extremity, not elsewhere classified"
        },
        {
         "code": "81.62",
         "name": "Fusion or refusion of 2-3 vertebrae"
        },
        {
         "code": "81.63",
         "name": "Fusion or refusion of 4-8 vertebrae"
        },
        {
         "code": "81.64",
         "name": "Fusion or refusion of 9 or more vertebrae"
        },
        {
         "code": "81.65",
         "name": "Percutaneous vertebroplasty"
        },
        {
         "code": "81.66",
         "name": "Percutaneous vertebral augmentation"
        },
        {
         "code": "81.71",
         "name": "Arthroplasty of metacarpophalangeal and interphalangeal joint with implant"
        },
        {
         "code": "81.72",
         "name": "Arthroplasty of metacarpophalangeal and interphalangeal joint without implant"
        },
        {
         "code": "81.73",
         "name": "Total wrist replacement"
        },
        {
         "code": "81.74",
         "name": "Arthroplasty of carpocarpal or carpometacarpal joint with implant"
        },
        {
         "code": "81.75",
         "name": "Arthroplasty of carpocarpal or carpometacarpal joint without implant"
        },
        {
         "code": "81.79",
         "name": "Other repair of hand, fingers, and wrist"
        },
        {
         "code": "81.80",
         "name": "Other total shoulder replacement"
        },
        {
         "code": "81.81",
         "name": "Partial shoulder replacement"
        },
        {
         "code": "81.82",
         "name": "Repair of recurrent dislocation of shoulder"
        },
        {
         "code": "81.83",
         "name": "Other repair of shoulder"
        },
        {
         "code": "81.84",
         "name": "Total elbow replacement"
        },
        {
         "code": "81.85",
         "name": "Other repair of elbow"
        },
        {
         "code": "81.88",
         "name": "Reverse total shoulder replacement"
        },
        {
         "code": "81.91",
         "name": "Arthrocentesis"
        },
        {
         "code": "81.92",
         "name": "Injection of therapeutic substance into joint or ligament"
        },
        {
         "code": "81.93",
         "name": "Suture of capsule or ligament of upper extremity"
        },
        {
         "code": "81.94",
         "name": "Suture of capsule or ligament of ankle and foot"
        },
        {
         "code": "81.95",
         "name": "Suture of capsule or ligament of other lower extremity"
        },
        {
         "code": "81.96",
         "name": "Other repair of joint"
        },
        {
         "code": "81.97",
         "name": "Revision of joint replacement of upper extremity"
        },
        {
         "code": "81.98",
         "name": "Other diagnostic procedures on joint structures"
        },
        {
         "code": "81.99",
         "name": "Other operations on joint structures"
        },
        {
         "code": "82.01",
         "name": "Exploration of tendon sheath of hand"
        },
        {
         "code": "82.02",
         "name": "Myotomy of hand"
        },
        {
         "code": "82.03",
         "name": "Bursotomy of hand"
        },
        {
         "code": "82.04",
         "name": "Incision and drainage of palmar or thenar space"
        },
        {
         "code": "82.09",
         "name": "Other incision of soft tissue of hand"
        },
        {
         "code": "82.11",
         "name": "Tenotomy of hand"
        },
        {
         "code": "82.12",
         "name": "Fasciotomy of hand"
        },
        {
         "code": "82.19",
         "name": "Other division of soft tissue of hand"
        },
        {
         "code": "82.21",
         "name": "Excision of lesion of tendon sheath of hand"
        },
        {
         "code": "82.22",
         "name": "Excision of lesion of muscle of hand"
        },
        {
         "code": "82.29",
         "name": "Excision of other lesion of soft tissue of hand"
        },
        {
         "code": "82.31",
         "name": "Bursectomy of hand"
        },
        {
         "code": "82.32",
         "name": "Excision of tendon of hand for graft"
        },
        {
         "code": "82.33",
         "name": "Other tenonectomy of hand"
        },
        {
         "code": "82.34",
         "name": "Excision of muscle or fascia of hand for graft"
        },
        {
         "code": "82.35",
         "name": "Other fasciectomy of hand"
        },
        {
         "code": "82.36",
         "name": "Other myectomy of hand"
        },
        {
         "code": "82.39",
         "name": "Other excision of soft tissue of hand"
        },
        {
         "code": "82.41",
         "name": "Suture of tendon sheath of hand"
        },
        {
         "code": "82.42",
         "name": "Delayed suture of flexor tendon of hand"
        },
        {
         "code": "82.43",
         "name": "Delayed suture of other tendon of hand"
        },
        {
         "code": "82.44",
         "name": "Other suture of flexor tendon of hand"
        },
        {
         "code": "82.45",
         "name": "Other suture of other tendon of hand"
        },
        {
         "code": "82.46",
         "name": "Suture of muscle or fascia of hand"
        },
        {
         "code": "82.51",
         "name": "Advancement of tendon of hand"
        },
        {
         "code": "82.52",
         "name": "Recession of tendon of hand"
        },
        {
         "code": "82.53",
         "name": "Reattachment of tendon of hand"
        },
        {
         "code": "82.54",
         "name": "Reattachment of muscle of hand"
        },
        {
         "code": "82.55",
         "name": "Other change in hand muscle or tendon length"
        },
        {
         "code": "82.56",
         "name": "Other hand tendon transfer or transplantation"
        },
        {
         "code": "82.57",
         "name": "Other hand tendon transposition"
        },
        {
         "code": "82.58",
         "name": "Other hand muscle transfer or transplantation"
        },
        {
         "code": "82.59",
         "name": "Other hand muscle transposition"
        },
        {
         "code": "82.61",
         "name": "Pollicization operation carrying over nerves and blood supply"
        },
        {
         "code": "82.69",
         "name": "Other reconstruction of thumb"
        },
        {
         "code": "82.71",
         "name": "Tendon pulley reconstruction of hand"
        },
        {
         "code": "82.72",
         "name": "Plastic operation on hand with graft of muscle or fascia"
        },
        {
         "code": "82.79",
         "name": "Plastic operation on hand with other graft or implant"
        },
        {
         "code": "82.81",
         "name": "Transfer of finger, except thumb"
        },
        {
         "code": "82.82",
         "name": "Repair of cleft hand"
        },
        {
         "code": "82.83",
         "name": "Repair of macrodactyly"
        },
        {
         "code": "82.84",
         "name": "Repair of mallet finger"
        },
        {
         "code": "82.85",
         "name": "Other tenodesis of hand"
        },
        {
         "code": "82.86",
         "name": "Other tenoplasty of hand"
        },
        {
         "code": "82.89",
         "name": "Other plastic operations on hand"
        },
        {
         "code": "82.91",
         "name": "Lysis of adhesions of hand"
        },
        {
         "code": "82.92",
         "name": "Aspiration of bursa of hand"
        },
        {
         "code": "82.93",
         "name": "Aspiration of other soft tissue of hand"
        },
        {
         "code": "82.94",
         "name": "Injection of therapeutic substance into bursa of hand"
        },
        {
         "code": "82.95",
         "name": "Injection of therapeutic substance into tendon of hand"
        },
        {
         "code": "82.96",
         "name": "Other injection of locally-acting therapeutic substance into soft tissue of hand"
        },
        {
         "code": "82.99",
         "name": "Other operations on muscle, tendon, and fascia of hand"
        },
        {
         "code": "83.01",
         "name": "Exploration of tendon sheath"
        },
        {
         "code": "83.02",
         "name": "Myotomy"
        },
        {
         "code": "83.03",
         "name": "Bursotomy"
        },
        {
         "code": "83.09",
         "name": "Other incision of soft tissue"
        },
        {
         "code": "83.11",
         "name": "Achillotenotomy"
        },
        {
         "code": "83.12",
         "name": "Adductor tenotomy of hip"
        },
        {
         "code": "83.13",
         "name": "Other tenotomy"
        },
        {
         "code": "83.14",
         "name": "Fasciotomy"
        },
        {
         "code": "83.19",
         "name": "Other division of soft tissue"
        },
        {
         "code": "83.21",
         "name": "Open biopsy of soft tissue"
        },
        {
         "code": "83.29",
         "name": "Other diagnostic procedures on muscle, tendon, fascia, and bursa, including that of hand"
        },
        {
         "code": "83.31",
         "name": "Excision of lesion of tendon sheath"
        },
        {
         "code": "83.32",
         "name": "Excision of lesion of muscle"
        },
        {
         "code": "83.39",
         "name": "Excision of lesion of other soft tissue"
        },
        {
         "code": "83.41",
         "name": "Excision of tendon for graft"
        },
        {
         "code": "83.42",
         "name": "Other tenonectomy"
        },
        {
         "code": "83.43",
         "name": "Excision of muscle or fascia for graft"
        },
        {
         "code": "83.44",
         "name": "Other fasciectomy"
        },
        {
         "code": "83.45",
         "name": "Other myectomy"
        },
        {
         "code": "83.49",
         "name": "Other excision of soft tissue"
        },
        {
         "code": "83.5",
         "name": "Bursectomy"
        },
        {
         "code": "83.61",
         "name": "Suture of tendon sheath"
        },
        {
         "code": "83.62",
         "name": "Delayed suture of tendon"
        },
        {
         "code": "83.63",
         "name": "Rotator cuff repair"
        },
        {
         "code": "83.64",
         "name": "Other suture of tendon"
        },
        {
         "code": "83.65",
         "name": "Other suture of muscle or fascia"
        },
        {
         "code": "83.71",
         "name": "Advancement of tendon"
        },
        {
         "code": "83.72",
         "name": "Recession of tendon"
        },
        {
         "code": "83.73",
         "name": "Reattachment of tendon"
        },
        {
         "code": "83.74",
         "name": "Reattachment of muscle"
        },
        {
         "code": "83.75",
         "name": "Tendon transfer or transplantation"
        },
        {
         "code": "83.76",
         "name": "Other tendon transposition"
        },
        {
         "code": "83.77",
         "name": "Muscle transfer or transplantation"
        },
        {
         "code": "83.79",
         "name": "Other muscle transposition"
        },
        {
         "code": "83.81",
         "name": "Tendon graft"
        },
        {
         "code": "83.82",
         "name": "Graft of muscle or fascia"
        },
        {
         "code": "83.83",
         "name": "Tendon pulley reconstruction other than hand"
        },
        {
         "code": "83.84",
         "name": "Release of clubfoot, not elsewhere classified"
        },
        {
         "code": "83.85",
         "name": "Other change in muscle or tendon length"
        },
        {
         "code": "83.86",
         "name": "Quadricepsplasty"
        },
        {
         "code": "83.87",
         "name": "Other plastic operations on muscle"
        },
        {
         "code": "83.88",
         "name": "Other plastic operations on tendon"
        },
        {
         "code": "83.89",
         "name": "Other plastic operations on fascia"
        },
        {
         "code": "83.91",
         "name": "Lysis of adhesions of muscle, tendon, fascia, and bursa"
        },
        {
         "code": "83.92",
         "name": "Insertion or replacement of skeletal muscle stimulator"
        },
        {
         "code": "83.93",
         "name": "Removal of skeletal muscle stimulator"
        },
        {
         "code": "83.94",
         "name": "Aspiration of bursa"
        },
        {
         "code": "83.95",
         "name": "Aspiration of other soft tissue"
        },
        {
         "code": "83.96",
         "name": "Injection of therapeutic substance into bursa"
        },
        {
         "code": "83.97",
         "name": "Injection of therapeutic substance into tendon"
        },
        {
         "code": "83.98",
         "name": "Injection of locally acting therapeutic substance into other soft tissue"
        },
        {
         "code": "83.99",
         "name": "Other operations on muscle, tendon, fascia, and bursa"
        },
        {
         "code": "84.00",
         "name": "Upper limb amputation, not otherwise specified"
        },
        {
         "code": "84.01",
         "name": "Amputation and disarticulation of finger"
        },
        {
         "code": "84.02",
         "name": "Amputation and disarticulation of thumb"
        },
        {
         "code": "84.03",
         "name": "Amputation through hand"
        },
        {
         "code": "84.04",
         "name": "Disarticulation of wrist"
        },
        {
         "code": "84.05",
         "name": "Amputation through forearm"
        },
        {
         "code": "84.06",
         "name": "Disarticulation of elbow"
        },
        {
         "code": "84.07",
         "name": "Amputation through humerus"
        },
        {
         "code": "84.08",
         "name": "Disarticulation of shoulder"
        },
        {
         "code": "84.09",
         "name": "Interthoracoscapular amputation"
        },
        {
         "code": "84.10",
         "name": "Lower limb amputation, not otherwise specified"
        },
        {
         "code": "84.11",
         "name": "Amputation of toe"
        },
        {
         "code": "84.12",
         "name": "Amputation through foot"
        },
        {
         "code": "84.13",
         "name": "Disarticulation of ankle"
        },
        {
         "code": "84.14",
         "name": "Amputation of ankle through malleoli of tibia and fibula"
        },
        {
         "code": "84.15",
         "name": "Other amputation below knee"
        },
        {
         "code": "84.16",
         "name": "Disarticulation of knee"
        },
        {
         "code": "84.17",
         "name": "Amputation above knee"
        },
        {
         "code": "84.18",
         "name": "Disarticulation of hip"
        },
        {
         "code": "84.19",
         "name": "Abdominopelvic amputation"
        },
        {
         "code": "84.21",
         "name": "Thumb reattachment"
        },
        {
         "code": "84.22",
         "name": "Finger reattachment"
        },
        {
         "code": "84.23",
         "name": "Forearm, wrist, or hand reattachment"
        },
        {
         "code": "84.24",
         "name": "Upper arm reattachment"
        },
        {
         "code": "84.25",
         "name": "Toe reattachment"
        },
        {
         "code": "84.26",
         "name": "Foot reattachment"
        },
        {
         "code": "84.27",
         "name": "Lower leg or ankle reattachment"
        },
        {
         "code": "84.28",
         "name": "Thigh reattachment"
        },
        {
         "code": "84.29",
         "name": "Other reattachment of extremity"
        },
        {
         "code": "84.3",
         "name": "Revision of amputation stump"
        },
        {
         "code": "84.40",
         "name": "Implantation or fitting of prosthetic limb device, not otherwise specified"
        },
        {
         "code": "84.41",
         "name": "Fitting of prosthesis of upper arm and shoulder"
        },
        {
         "code": "84.42",
         "name": "Fitting of prosthesis of lower arm and hand"
        },
        {
         "code": "84.43",
         "name": "Fitting of prosthesis of arm, not otherwise specified"
        },
        {
         "code": "84.44",
         "name": "Implantation of prosthetic device of arm"
        },
        {
         "code": "84.45",
         "name": "Fitting of prosthesis above knee"
        },
        {
         "code": "84.46",
         "name": "Fitting of prosthesis below knee"
        },
        {
         "code": "84.47",
         "name": "Fitting of prosthesis of leg, not otherwise specified"
        },
        {
         "code": "84.48",
         "name": "Implantation of prosthetic device of leg"
        },
        {
         "code": "84.51",
         "name": "Insertion of interbody spinal fusion device"
        },
        {
         "code": "84.52",
         "name": "Insertion of recombinant bone morphogenetic protein"
        },
        {
         "code": "84.53",
         "name": "Implantation of internal limb lengthening device with kinetic distraction"
        },
        {
         "code": "84.54",
         "name": "Implantation of other internal limb lengthening device"
        },
        {
         "code": "84.55",
         "name": "Insertion of bone void filler"
        },
        {
         "code": "84.56",
         "name": "Insertion or replacement of (cement) spacer"
        },
        {
         "code": "84.57",
         "name": "Removal of (cement) spacer"
        },
        {
         "code": "84.59",
         "name": "Insertion of other spinal devices"
        },
        {
         "code": "84.60",
         "name": "Insertion of spinal disc prosthesis, not otherwise specified"
        },
        {
         "code": "84.61",
         "name": "Insertion of partial spinal disc prosthesis, cervical"
        },
        {
         "code": "84.62",
         "name": "Insertion of total spinal disc prosthesis, cervical"
        },
        {
         "code": "84.63",
         "name": "Insertion of spinal disc prosthesis, thoracic"
        },
        {
         "code": "84.64",
         "name": "Insertion of partial spinal disc prosthesis, lumbosacral"
        },
        {
         "code": "84.65",
         "name": "Insertion of total spinal disc prosthesis, lumbosacral"
        },
        {
         "code": "84.66",
         "name": "Revision or replacement of artificial spinal disc prosthesis, cervical"
        },
        {
         "code": "84.67",
         "name": "Revision or replacement of artificial spinal disc prosthesis, thoracic"
        },
        {
         "code": "84.68",
         "name": "Revision or replacement of artificial spinal disc prosthesis, lumbosacral"
        },
        {
         "code": "84.69",
         "name": "Revision or replacement of artificial spinal disc prosthesis, not otherwise specified"
        },
        {
         "code": "84.71",
         "name": "Application of external fixator device, monoplanar system"
        },
        {
         "code": "84.72",
         "name": "Application of external fixator device, ring system"
        },
        {
         "code": "84.73",
         "name": "Application of hybrid external fixator device"
        },
        {
         "code": "84.80",
         "name": "Insertion or replacement of interspinous process device(s)"
        },
        {
         "code": "84.81",
         "name": "Revision of interspinous process device(s)"
        },
        {
         "code": "84.82",
         "name": "Insertion or replacement of pedicle-based dynamic stabilization device(s)"
        },
        {
         "code": "84.83",
         "name": "Revision of pedicle-based dynamic stabilization device(s)"
        },
        {
         "code": "84.84",
         "name": "Insertion or replacement of facet replacement device(s)"
        },
        {
         "code": "84.85",
         "name": "Revision of facet replacement device(s)"
        },
        {
         "code": "84.91",
         "name": "Amputation, not otherwise specified"
        },
        {
         "code": "84.92",
         "name": "Separation of equal conjoined twins"
        },
        {
         "code": "84.93",
         "name": "Separation of unequal conjoined twins"
        },
        {
         "code": "84.94",
         "name": "Insertion of sternal fixation device with rigid plates"
        },
        {
         "code": "84.99",
         "name": "Other operations on musculoskeletal system"
        },
        {
         "code": "85.0",
         "name": "Mastotomy"
        },
        {
         "code": "85.11",
         "name": "Closed [percutaneous] [needle] biopsy of breast"
        },
        {
         "code": "85.12",
         "name": "Open biopsy of breast"
        },
        {
         "code": "85.19",
         "name": "Other diagnostic procedures on breast"
        },
        {
         "code": "85.20",
         "name": "Excision or destruction of breast tissue, not otherwise specified"
        },
        {
         "code": "85.21",
         "name": "Local excision of lesion of breast"
        },
        {
         "code": "85.22",
         "name": "Resection of quadrant of breast"
        },
        {
         "code": "85.23",
         "name": "Subtotal mastectomy"
        },
        {
         "code": "85.24",
         "name": "Excision of ectopic breast tissue"
        },
        {
         "code": "85.25",
         "name": "Excision of nipple"
        },
        {
         "code": "85.31",
         "name": "Unilateral reduction mammoplasty"
        },
        {
         "code": "85.32",
         "name": "Bilateral reduction mammoplasty"
        },
        {
         "code": "85.33",
         "name": "Unilateral subcutaneous mammectomy with synchronous implant"
        },
        {
         "code": "85.34",
         "name": "Other unilateral subcutaneous mammectomy"
        },
        {
         "code": "85.35",
         "name": "Bilateral subcutaneous mammectomy with synchronous implant"
        },
        {
         "code": "85.36",
         "name": "Other bilateral subcutaneous mammectomy"
        },
        {
         "code": "85.41",
         "name": "Unilateral simple mastectomy"
        },
        {
         "code": "85.42",
         "name": "Bilateral simple mastectomy"
        },
        {
         "code": "85.43",
         "name": "Unilateral extended simple mastectomy"
        },
        {
         "code": "85.44",
         "name": "Bilateral extended simple mastectomy"
        },
        {
         "code": "85.45",
         "name": "Unilateral radical mastectomy"
        },
        {
         "code": "85.46",
         "name": "Bilateral radical mastectomy"
        },
        {
         "code": "85.47",
         "name": "Unilateral extended radical mastectomy"
        },
        {
         "code": "85.48",
         "name": "Bilateral extended radical mastectomy"
        },
        {
         "code": "85.50",
         "name": "Augmentation mammoplasty, not otherwise specified"
        },
        {
         "code": "85.51",
         "name": "Unilateral injection into breast for augmentation"
        },
        {
         "code": "85.52",
         "name": "Bilateral injection into breast for augmentation"
        },
        {
         "code": "85.53",
         "name": "Unilateral breast implant"
        },
        {
         "code": "85.54",
         "name": "Bilateral breast implant"
        },
        {
         "code": "85.55",
         "name": "Fat graft to breast"
        },
        {
         "code": "85.6",
         "name": "Mastopexy"
        },
        {
         "code": "85.70",
         "name": "Total reconstruction of breast, not otherwise specified"
        },
        {
         "code": "85.71",
         "name": "Latissimus dorsi myocutaneous flap"
        },
        {
         "code": "85.72",
         "name": "Transverse rectus abdominis myocutaneous (TRAM) flap, pedicled"
        },
        {
         "code": "85.73",
         "name": "Transverse rectus abdominis myocutaneous (TRAM) flap, free"
        },
        {
         "code": "85.74",
         "name": "Deep inferior epigastric artery perforator (DIEP) flap, free"
        },
        {
         "code": "85.75",
         "name": "Superficial inferior epigastric artery (SIEA) flap, free"
        },
        {
         "code": "85.76",
         "name": "Gluteal artery perforator (GAP) flap, free"
        },
        {
         "code": "85.79",
         "name": "Other total reconstruction of breast"
        },
        {
         "code": "85.81",
         "name": "Suture of laceration of breast"
        },
        {
         "code": "85.82",
         "name": "Split-thickness graft to breast"
        },
        {
         "code": "85.83",
         "name": "Full-thickness graft to breast"
        },
        {
         "code": "85.84",
         "name": "Pedicle graft to breast"
        },
        {
         "code": "85.85",
         "name": "Muscle flap graft to breast"
        },
        {
         "code": "85.86",
         "name": "Transposition of nipple"
        },
        {
         "code": "85.87",
         "name": "Other repair or reconstruction of nipple"
        },
        {
         "code": "85.89",
         "name": "Other mammoplasty"
        },
        {
         "code": "85.91",
         "name": "Aspiration of breast"
        },
        {
         "code": "85.92",
         "name": "Injection of therapeutic agent into breast"
        },
        {
         "code": "85.93",
         "name": "Revision of implant of breast"
        },
        {
         "code": "85.94",
         "name": "Removal of implant of breast"
        },
        {
         "code": "85.95",
         "name": "Insertion of breast tissue expander"
        },
        {
         "code": "85.96",
         "name": "Removal of breast tissue expander"
        },
        {
         "code": "85.99",
         "name": "Other operations on the breast"
        },
        {
         "code": "86.01",
         "name": "Aspiration of skin and subcutaneous tissue"
        },
        {
         "code": "86.02",
         "name": "Injection or tattooing of skin lesion or defect"
        },
        {
         "code": "86.03",
         "name": "Incision of pilonidal sinus or cyst"
        },
        {
         "code": "86.04",
         "name": "Other incision with drainage of skin and subcutaneous tissue"
        },
        {
         "code": "86.05",
         "name": "Incision with removal of foreign body or device from skin and subcutaneous tissue"
        },
        {
         "code": "86.06",
         "name": "Insertion of totally implantable infusion pump"
        },
        {
         "code": "86.07",
         "name": "Insertion of totally implantable vascular access device [VAD]"
        },
        {
         "code": "86.09",
         "name": "Other incision of skin and subcutaneous tissue"
        },
        {
         "code": "86.11",
         "name": "Closed biopsy of skin and subcutaneous tissue"
        },
        {
         "code": "86.19",
         "name": "Other diagnostic procedures on skin and subcutaneous tissue"
        },
        {
         "code": "86.21",
         "name": "Excision of pilonidal cyst or sinus"
        },
        {
         "code": "86.22",
         "name": "Excisional debridement of wound, infection, or burn"
        },
        {
         "code": "86.23",
         "name": "Removal of nail, nail bed, or nail fold"
        },
        {
         "code": "86.24",
         "name": "Chemosurgery of skin"
        },
        {
         "code": "86.25",
         "name": "Dermabrasion"
        },
        {
         "code": "86.26",
         "name": "Ligation of dermal appendage"
        },
        {
         "code": "86.27",
         "name": "Debridement of nail, nail bed, or nail fold"
        },
        {
         "code": "86.28",
         "name": "Nonexcisional debridement of wound, infection or burn"
        },
        {
         "code": "86.3",
         "name": "Other local excision or destruction of lesion or tissue of skin and subcutaneous tissue"
        },
        {
         "code": "86.4",
         "name": "Radical excision of skin lesion"
        },
        {
         "code": "86.51",
         "name": "Replantation of scalp"
        },
        {
         "code": "86.59",
         "name": "Closure of skin and subcutaneous tissue of other sites"
        },
        {
         "code": "86.60",
         "name": "Free skin graft, not otherwise specified"
        },
        {
         "code": "86.61",
         "name": "Full-thickness skin graft to hand"
        },
        {
         "code": "86.62",
         "name": "Other skin graft to hand"
        },
        {
         "code": "86.63",
         "name": "Full-thickness skin graft to other sites"
        },
        {
         "code": "86.64",
         "name": "Hair transplant"
        },
        {
         "code": "86.65",
         "name": "Heterograft to skin"
        },
        {
         "code": "86.66",
         "name": "Homograft to skin"
        },
        {
         "code": "86.67",
         "name": "Dermal regenerative graft"
        },
        {
         "code": "86.69",
         "name": "Other skin graft to other sites"
        },
        {
         "code": "86.70",
         "name": "Pedicle or flap graft, not otherwise specified"
        },
        {
         "code": "86.71",
         "name": "Cutting and preparation of pedicle grafts or flaps"
        },
        {
         "code": "86.72",
         "name": "Advancement of pedicle graft"
        },
        {
         "code": "86.73",
         "name": "Attachment of pedicle or flap graft to hand"
        },
        {
         "code": "86.74",
         "name": "Attachment of pedicle or flap graft to other sites"
        },
        {
         "code": "86.75",
         "name": "Revision of pedicle or flap graft"
        },
        {
         "code": "86.81",
         "name": "Repair for facial weakness"
        },
        {
         "code": "86.82",
         "name": "Facial rhytidectomy"
        },
        {
         "code": "86.83",
         "name": "Size reduction plastic operation"
        },
        {
         "code": "86.84",
         "name": "Relaxation of scar or web contracture of skin"
        },
        {
         "code": "86.85",
         "name": "Correction of syndactyly"
        },
        {
         "code": "86.86",
         "name": "Onychoplasty"
        },
        {
         "code": "86.87",
         "name": "Fat graft of skin and subcutaneous tissue"
        },
        {
         "code": "86.89",
         "name": "Other repair and reconstruction of skin and subcutaneous tissue"
        },
        {
         "code": "86.90",
         "name": "Extraction of fat for graft or banking"
        },
        {
         "code": "86.91",
         "name": "Excision of skin for graft"
        },
        {
         "code": "86.92",
         "name": "Electrolysis and other epilation of skin"
        },
        {
         "code": "86.93",
         "name": "Insertion of tissue expander"
        },
        {
         "code": "86.94",
         "name": "Insertion or replacement of single array neurostimulator pulse generator, not specified as rechargeable"
        },
        {
         "code": "86.95",
         "name": "Insertion or replacement of dual array neurostimulator pulse generator, not specified as rechargeable"
        },
        {
         "code": "86.96",
         "name": "Insertion or replacement of other neurostimulator pulse generator"
        },
        {
         "code": "86.97",
         "name": "Insertion or replacement of single array rechargeable neurostimulator pulse generator"
        },
        {
         "code": "86.98",
         "name": "Insertion or replacement of dual array rechargeable neurostimulator pulse generator"
        },
        {
         "code": "86.99",
         "name": "Other operations on skin and subcutaneous tissue"
        },
        {
         "code": "87.01",
         "name": "Pneumoencephalogram"
        },
        {
         "code": "87.02",
         "name": "Other contrast radiogram of brain and skull"
        },
        {
         "code": "87.03",
         "name": "Computerized axial tomography of head"
        },
        {
         "code": "87.04",
         "name": "Other tomography of head"
        },
        {
         "code": "87.05",
         "name": "Contrast dacryocystogram"
        },
        {
         "code": "87.06",
         "name": "Contrast radiogram of nasopharynx"
        },
        {
         "code": "87.07",
         "name": "Contrast laryngogram"
        },
        {
         "code": "87.08",
         "name": "Cervical lymphangiogram"
        },
        {
         "code": "87.09",
         "name": "Other soft tissue x-ray of face, head, and neck"
        },
        {
         "code": "87.11",
         "name": "Full-mouth x-ray of teeth"
        },
        {
         "code": "87.12",
         "name": "Other dental x-ray"
        },
        {
         "code": "87.13",
         "name": "Temporomandibular contrast arthrogram"
        },
        {
         "code": "87.14",
         "name": "Contrast radiogram of orbit"
        },
        {
         "code": "87.15",
         "name": "Contrast radiogram of sinus"
        },
        {
         "code": "87.16",
         "name": "Other x-ray of facial bones"
        },
        {
         "code": "87.17",
         "name": "Other x-ray of skull"
        },
        {
         "code": "87.21",
         "name": "Contrast myelogram"
        },
        {
         "code": "87.22",
         "name": "Other x-ray of cervical spine"
        },
        {
         "code": "87.23",
         "name": "Other x-ray of thoracic spine"
        },
        {
         "code": "87.24",
         "name": "Other x-ray of lumbosacral spine"
        },
        {
         "code": "87.29",
         "name": "Other x-ray of spine"
        },
        {
         "code": "87.31",
         "name": "Endotracheal bronchogram"
        },
        {
         "code": "87.32",
         "name": "Other contrast bronchogram"
        },
        {
         "code": "87.33",
         "name": "Mediastinal pneumogram"
        },
        {
         "code": "87.34",
         "name": "Intrathoracic lymphangiogram"
        },
        {
         "code": "87.35",
         "name": "Contrast radiogram of mammary ducts"
        },
        {
         "code": "87.36",
         "name": "Xerography of breast"
        },
        {
         "code": "87.37",
         "name": "Other mammography"
        },
        {
         "code": "87.38",
         "name": "Sinogram of chest wall"
        },
        {
         "code": "87.39",
         "name": "Other soft tissue x-ray of chest wall"
        },
        {
         "code": "87.41",
         "name": "Computerized axial tomography of thorax"
        },
        {
         "code": "87.42",
         "name": "Other tomography of thorax"
        },
        {
         "code": "87.43",
         "name": "X-ray of ribs, sternum, and clavicle"
        },
        {
         "code": "87.44",
         "name": "Routine chest x-ray, so described"
        },
        {
         "code": "87.49",
         "name": "Other chest x-ray"
        },
        {
         "code": "87.51",
         "name": "Percutaneous hepatic cholangiogram"
        },
        {
         "code": "87.52",
         "name": "Intravenous cholangiogram"
        },
        {
         "code": "87.53",
         "name": "Intraoperative cholangiogram"
        },
        {
         "code": "87.54",
         "name": "Other cholangiogram"
        },
        {
         "code": "87.59",
         "name": "Other biliary tract x-ray"
        },
        {
         "code": "87.61",
         "name": "Barium swallow"
        },
        {
         "code": "87.62",
         "name": "Upper GI series"
        },
        {
         "code": "87.63",
         "name": "Small bowel series"
        },
        {
         "code": "87.64",
         "name": "Lower GI series"
        },
        {
         "code": "87.65",
         "name": "Other x-ray of intestine"
        },
        {
         "code": "87.66",
         "name": "Contrast pancreatogram"
        },
        {
         "code": "87.69",
         "name": "Other digestive tract x-ray"
        },
        {
         "code": "87.71",
         "name": "Computerized axial tomography of kidney"
        },
        {
         "code": "87.72",
         "name": "Other nephrotomogram"
        },
        {
         "code": "87.73",
         "name": "Intravenous pyelogram"
        },
        {
         "code": "87.74",
         "name": "Retrograde pyelogram"
        },
        {
         "code": "87.75",
         "name": "Percutaneous pyelogram"
        },
        {
         "code": "87.76",
         "name": "Retrograde cystourethrogram"
        },
        {
         "code": "87.77",
         "name": "Other cystogram"
        },
        {
         "code": "87.78",
         "name": "Ileal conduitogram"
        },
        {
         "code": "87.79",
         "name": "Other x-ray of the urinary system"
        },
        {
         "code": "87.81",
         "name": "X-ray of gravid uterus"
        },
        {
         "code": "87.82",
         "name": "Gas contrast hysterosalpingogram"
        },
        {
         "code": "87.83",
         "name": "Opaque dye contrast hysterosalpingogram"
        },
        {
         "code": "87.84",
         "name": "Percutaneous hysterogram"
        },
        {
         "code": "87.85",
         "name": "Other x-ray of fallopian tubes and uterus"
        },
        {
         "code": "87.89",
         "name": "Other x-ray of female genital organs"
        },
        {
         "code": "87.91",
         "name": "Contrast seminal vesiculogram"
        },
        {
         "code": "87.92",
         "name": "Other x-ray of prostate and seminal vesicles"
        },
        {
         "code": "87.93",
         "name": "Contrast epididymogram"
        },
        {
         "code": "87.94",
         "name": "Contrast vasogram"
        },
        {
         "code": "87.95",
         "name": "Other x-ray of epididymis and vas deferens"
        },
        {
         "code": "87.99",
         "name": "Other x-ray of male genital organs"
        },
        {
         "code": "88.01",
         "name": "Computerized axial tomography of abdomen"
        },
        {
         "code": "88.02",
         "name": "Other abdomen tomography"
        },
        {
         "code": "88.03",
         "name": "Sinogram of abdominal wall"
        },
        {
         "code": "88.04",
         "name": "Abdominal lymphangiogram"
        },
        {
         "code": "88.09",
         "name": "Other soft tissue x-ray of abdominal wall"
        },
        {
         "code": "88.11",
         "name": "Pelvic opaque dye contrast radiography"
        },
        {
         "code": "88.12",
         "name": "Pelvic gas contrast radiography"
        },
        {
         "code": "88.13",
         "name": "Other peritoneal pneumogram"
        },
        {
         "code": "88.14",
         "name": "Retroperitoneal fistulogram"
        },
        {
         "code": "88.15",
         "name": "Retroperitoneal pneumogram"
        },
        {
         "code": "88.16",
         "name": "Other retroperitoneal x-ray"
        },
        {
         "code": "88.19",
         "name": "Other x-ray of abdomen"
        },
        {
         "code": "88.21",
         "name": "Skeletal x-ray of shoulder and upper arm"
        },
        {
         "code": "88.22",
         "name": "Skeletal x-ray of elbow and forearm"
        },
        {
         "code": "88.23",
         "name": "Skeletal x-ray of wrist and hand"
        },
        {
         "code": "88.24",
         "name": "Skeletal x-ray of upper limb, not otherwise specified"
        },
        {
         "code": "88.25",
         "name": "Pelvimetry"
        },
        {
         "code": "88.26",
         "name": "Other skeletal x-ray of pelvis and hip"
        },
        {
         "code": "88.27",
         "name": "Skeletal x-ray of thigh, knee, and lower leg"
        },
        {
         "code": "88.28",
         "name": "Skeletal x-ray of ankle and foot"
        },
        {
         "code": "88.29",
         "name": "Skeletal x-ray of lower limb, not otherwise specified"
        },
        {
         "code": "88.31",
         "name": "Skeletal series"
        },
        {
         "code": "88.32",
         "name": "Contrast arthrogram"
        },
        {
         "code": "88.33",
         "name": "Other skeletal x-ray"
        },
        {
         "code": "88.34",
         "name": "Lymphangiogram of upper limb"
        },
        {
         "code": "88.35",
         "name": "Other soft tissue x-ray of upper limb"
        },
        {
         "code": "88.36",
         "name": "Lymphangiogram of lower limb"
        },
        {
         "code": "88.37",
         "name": "Other soft tissue x-ray of lower limb"
        },
        {
         "code": "88.38",
         "name": "Other computerized axial tomography"
        },
        {
         "code": "88.39",
         "name": "X-ray, other and unspecified"
        },
        {
         "code": "88.40",
         "name": "Arteriography using contrast material, unspecified site"
        },
        {
         "code": "88.41",
         "name": "Arteriography of cerebral arteries"
        },
        {
         "code": "88.42",
         "name": "Aortography"
        },
        {
         "code": "88.43",
         "name": "Arteriography of pulmonary arteries"
        },
        {
         "code": "88.44",
         "name": "Arteriography of other intrathoracic vessels"
        },
        {
         "code": "88.45",
         "name": "Arteriography of renal arteries"
        },
        {
         "code": "88.46",
         "name": "Arteriography of placenta"
        },
        {
         "code": "88.47",
         "name": "Arteriography of other intra-abdominal arteries"
        },
        {
         "code": "88.48",
         "name": "Arteriography of femoral and other lower extremity arteries"
        },
        {
         "code": "88.49",
         "name": "Arteriography of other specified sites"
        },
        {
         "code": "88.50",
         "name": "Angiocardiography, not otherwise specified"
        },
        {
         "code": "88.51",
         "name": "Angiocardiography of venae cavae"
        },
        {
         "code": "88.52",
         "name": "Angiocardiography of right heart structures"
        },
        {
         "code": "88.53",
         "name": "Angiocardiography of left heart structures"
        },
        {
         "code": "88.54",
         "name": "Combined right and left heart angiocardiography"
        },
        {
         "code": "88.55",
         "name": "Coronary arteriography using a single catheter"
        },
        {
         "code": "88.56",
         "name": "Coronary arteriography using two catheters"
        },
        {
         "code": "88.57",
         "name": "Other and unspecified coronary arteriography"
        },
        {
         "code": "88.58",
         "name": "Negative-contrast cardiac roentgenography"
        },
        {
         "code": "88.59",
         "name": "Intra-operative coronary fluorescence vascular angiography"
        },
        {
         "code": "88.60",
         "name": "Phlebography using contrast material, unspecified site"
        },
        {
         "code": "88.61",
         "name": "Phlebography of veins of head and neck using contrast material"
        },
        {
         "code": "88.62",
         "name": "Phlebography of pulmonary veins using contrast material"
        },
        {
         "code": "88.63",
         "name": "Phlebography of other intrathoracic veins using contrast material"
        },
        {
         "code": "88.64",
         "name": "Phlebography of the portal venous system using contrast material"
        },
        {
         "code": "88.65",
         "name": "Phlebography of other Intra-Abdominal veins using contrast material"
        },
        {
         "code": "88.66",
         "name": "Phlebography of femoral and other lower extremity veins using contrast material"
        },
        {
         "code": "88.67",
         "name": "Phlebography of other specified sites using contrast material"
        },
        {
         "code": "88.68",
         "name": "Impedance phlebography"
        },
        {
         "code": "88.71",
         "name": "Diagnostic ultrasound of head and neck"
        },
        {
         "code": "88.72",
         "name": "Diagnostic ultrasound of heart"
        },
        {
         "code": "88.73",
         "name": "Diagnostic ultrasound of other sites of thorax"
        },
        {
         "code": "88.74",
         "name": "Diagnostic ultrasound of digestive system"
        },
        {
         "code": "88.75",
         "name": "Diagnostic ultrasound of urinary system"
        },
        {
         "code": "88.76",
         "name": "Diagnostic ultrasound of abdomen and retroperitoneum"
        },
        {
         "code": "88.77",
         "name": "Diagnostic ultrasound of peripheral vascular system"
        },
        {
         "code": "88.78",
         "name": "Diagnostic ultrasound of gravid uterus"
        },
        {
         "code": "88.79",
         "name": "Other diagnostic ultrasound"
        },
        {
         "code": "88.81",
         "name": "Cerebral thermography"
        },
        {
         "code": "88.82",
         "name": "Ocular thermography"
        },
        {
         "code": "88.83",
         "name": "Bone thermography"
        },
        {
         "code": "88.84",
         "name": "Muscle thermography"
        },
        {
         "code": "88.85",
         "name": "Breast thermography"
        },
        {
         "code": "88.86",
         "name": "Blood vessel thermography"
        },
        {
         "code": "88.89",
         "name": "Thermography of other sites"
        },
        {
         "code": "88.90",
         "name": "Diagnostic imaging, not elsewhere classified"
        },
        {
         "code": "88.91",
         "name": "Magnetic resonance imaging of brain and brain stem"
        },
        {
         "code": "88.92",
         "name": "Magnetic resonance imaging of chest and myocardium"
        },
        {
         "code": "88.93",
         "name": "Magnetic resonance imaging of spinal canal"
        },
        {
         "code": "88.94",
         "name": "Magnetic resonance imaging of musculoskeletal"
        },
        {
         "code": "88.95",
         "name": "Magnetic resonance imaging of pelvis, prostate, and bladder"
        },
        {
         "code": "88.96",
         "name": "Other intraoperative magnetic resonance imaging"
        },
        {
         "code": "88.97",
         "name": "Magnetic resonance imaging of other and unspecified sites"
        },
        {
         "code": "88.98",
         "name": "Bone mineral density studies"
        },
        {
         "code": "89.01",
         "name": "Interview and evaluation, described as brief"
        },
        {
         "code": "89.02",
         "name": "Interview and evaluation, described as limited"
        },
        {
         "code": "89.03",
         "name": "Interview and evaluation, described as comprehensive"
        },
        {
         "code": "89.04",
         "name": "Other interview and evaluation"
        },
        {
         "code": "89.05",
         "name": "Diagnostic interview and evaluation, not otherwise specified"
        },
        {
         "code": "89.06",
         "name": "Consultation, described as limited"
        },
        {
         "code": "89.07",
         "name": "Consultation, described as comprehensive"
        },
        {
         "code": "89.08",
         "name": "Other consultation"
        },
        {
         "code": "89.09",
         "name": "Consultation, not otherwise specified"
        },
        {
         "code": "89.10",
         "name": "Intracarotid amobarbital test"
        },
        {
         "code": "89.11",
         "name": "Tonometry"
        },
        {
         "code": "89.12",
         "name": "Nasal function study"
        },
        {
         "code": "89.13",
         "name": "Neurologic examination"
        },
        {
         "code": "89.14",
         "name": "Electroencephalogram"
        },
        {
         "code": "89.15",
         "name": "Other nonoperative neurologic function tests"
        },
        {
         "code": "89.16",
         "name": "Transillumination of newborn skull"
        },
        {
         "code": "89.17",
         "name": "Polysomnogram"
        },
        {
         "code": "89.18",
         "name": "Other sleep disorder function tests"
        },
        {
         "code": "89.19",
         "name": "Video and radio-telemetered electroencephalographic monitoring"
        },
        {
         "code": "89.21",
         "name": "Urinary manometry"
        },
        {
         "code": "89.22",
         "name": "Cystometrogram"
        },
        {
         "code": "89.23",
         "name": "Urethral sphincter electromyogram"
        },
        {
         "code": "89.24",
         "name": "Uroflowmetry [UFR]"
        },
        {
         "code": "89.25",
         "name": "Urethral pressure profile [UPP]"
        },
        {
         "code": "89.26",
         "name": "Gynecological examination"
        },
        {
         "code": "89.29",
         "name": "Other nonoperative genitourinary system measurements"
        },
        {
         "code": "89.31",
         "name": "Dental examination"
        },
        {
         "code": "89.32",
         "name": "Esophageal manometry"
        },
        {
         "code": "89.33",
         "name": "Digital examination of enterostomy stoma"
        },
        {
         "code": "89.34",
         "name": "Digital examination of rectum"
        },
        {
         "code": "89.35",
         "name": "Transillumination of nasal sinuses"
        },
        {
         "code": "89.36",
         "name": "Manual examination of breast"
        },
        {
         "code": "89.37",
         "name": "Vital capacity determination"
        },
        {
         "code": "89.38",
         "name": "Other nonoperative respiratory measurements"
        },
        {
         "code": "89.39",
         "name": "Other nonoperative measurements and examinations"
        },
        {
         "code": "89.41",
         "name": "Cardiovascular stress test using treadmill"
        },
        {
         "code": "89.42",
         "name": "Masters' two-step stress test"
        },
        {
         "code": "89.43",
         "name": "Cardiovascular stress test using bicycle ergometer"
        },
        {
         "code": "89.44",
         "name": "Other cardiovascular stress test"
        },
        {
         "code": "89.45",
         "name": "Artificial pacemaker rate check"
        },
        {
         "code": "89.46",
         "name": "Artificial pacemaker artifact wave form check"
        },
        {
         "code": "89.47",
         "name": "Artificial pacemaker electrode impedance check"
        },
        {
         "code": "89.48",
         "name": "Artificial pacemaker voltage or amperage threshold check"
        },
        {
         "code": "89.49",
         "name": "Automatic implantable cardioverter\/defibrillator (AICD) check"
        },
        {
         "code": "89.50",
         "name": "Ambulatory cardiac monitoring"
        },
        {
         "code": "89.51",
         "name": "Rhythm electrocardiogram"
        },
        {
         "code": "89.52",
         "name": "Electrocardiogram"
        },
        {
         "code": "89.53",
         "name": "Vectorcardiogram (with ECG)"
        },
        {
         "code": "89.54",
         "name": "Electrographic monitoring"
        },
        {
         "code": "89.55",
         "name": "Phonocardiogram with ECG lead"
        },
        {
         "code": "89.56",
         "name": "Carotid pulse tracing with ECG lead"
        },
        {
         "code": "89.57",
         "name": "Apexcardiogram (with ECG lead)"
        },
        {
         "code": "89.58",
         "name": "Plethysmogram"
        },
        {
         "code": "89.59",
         "name": "Other nonoperative cardiac and vascular measurements"
        },
        {
         "code": "89.60",
         "name": "Continuous intra-arterial blood gas monitoring"
        },
        {
         "code": "89.61",
         "name": "Systemic arterial pressure monitoring"
        },
        {
         "code": "89.62",
         "name": "Central venous pressure monitoring"
        },
        {
         "code": "89.63",
         "name": "Pulmonary artery pressure monitoring"
        },
        {
         "code": "89.64",
         "name": "Pulmonary artery wedge monitoring"
        },
        {
         "code": "89.65",
         "name": "Measurement of systemic arterial blood gases"
        },
        {
         "code": "89.66",
         "name": "Measurement of mixed venous blood gases"
        },
        {
         "code": "89.67",
         "name": "Monitoring of cardiac output by oxygen consumption technique"
        },
        {
         "code": "89.68",
         "name": "Monitoring of cardiac output by other technique"
        },
        {
         "code": "89.69",
         "name": "Monitoring of coronary blood flow"
        },
        {
         "code": "89.7",
         "name": "General physical examination"
        },
        {
         "code": "89.8",
         "name": "Autopsy"
        },
        {
         "code": "90.01",
         "name": "Microscopic examination of specimen from nervous system and of spinal fluid, bacterial smear"
        },
        {
         "code": "90.02",
         "name": "Microscopic examination of specimen from nervous system and of spinal fluid, culture"
        },
        {
         "code": "90.03",
         "name": "Microscopic examination of specimen from nervous system and of spinal fluid, culture and sensitivity"
        },
        {
         "code": "90.04",
         "name": "Microscopic examination of specimen from nervous system and of spinal fluid, parasitology"
        },
        {
         "code": "90.05",
         "name": "Microscopic examination of specimen from nervous system and of spinal fluid, toxicology"
        },
        {
         "code": "90.06",
         "name": "Microscopic examination of specimen from nervous system and of spinal fluid, cell block and Papanicolaou smear"
        },
        {
         "code": "90.09",
         "name": "Microscopic examination of specimen from nervous system and of spinal fluid, other microscopic examination"
        },
        {
         "code": "90.11",
         "name": "Microscopic examination of specimen from endocrine gland, not elsewhere classified, bacterial smear"
        },
        {
         "code": "90.12",
         "name": "Microscopic examination of specimen from endocrine gland, not elsewhere classified, culture"
        },
        {
         "code": "90.13",
         "name": "Microscopic examination of specimen from endocrine gland, not elsewhere classified, culture and sensitivity"
        },
        {
         "code": "90.14",
         "name": "Microscopic examination of specimen from endocrine gland, not elsewhere classified, parasitology"
        },
        {
         "code": "90.15",
         "name": "Microscopic examination of specimen from endocrine gland, not elsewhere classified, toxicology"
        },
        {
         "code": "90.16",
         "name": "Microscopic examination of specimen from endocrine gland, not elsewhere classified, cell block and Papanicolaou smear"
        },
        {
         "code": "90.19",
         "name": "Microscopic examination of specimen from endocrine gland, not elsewhere classified, other microscopic examination"
        },
        {
         "code": "90.21",
         "name": "Microscopic examination of specimen from eye, bacterial smear"
        },
        {
         "code": "90.22",
         "name": "Microscopic examination of specimen from eye, culture"
        },
        {
         "code": "90.23",
         "name": "Microscopic examination of specimen from eye, culture and sensitivity"
        },
        {
         "code": "90.24",
         "name": "Microscopic examination of specimen from eye, parasitology"
        },
        {
         "code": "90.25",
         "name": "Microscopic examination of specimen from eye, toxicology"
        },
        {
         "code": "90.26",
         "name": "Microscopic examination of specimen from eye, cell block and Papanicolaou smear"
        },
        {
         "code": "90.29",
         "name": "Microscopic examination of specimen from eye, other microscopic examination"
        },
        {
         "code": "90.31",
         "name": "Microscopic examination of specimen from ear, nose, throat, and larynx, bacterial smear"
        },
        {
         "code": "90.32",
         "name": "Microscopic examination of specimen from ear, nose, throat, and larynx, culture"
        },
        {
         "code": "90.33",
         "name": "Microscopic examination of specimen from ear, nose, throat, and larynx, culture and sensitivity"
        },
        {
         "code": "90.34",
         "name": "Microscopic examination of specimen from ear, nose, throat, and larynx, parasitology"
        },
        {
         "code": "90.35",
         "name": "Microscopic examination of specimen from ear, nose, throat, and larynx, toxicology"
        },
        {
         "code": "90.36",
         "name": "Microscopic examination of specimen from ear, nose, throat, and larynx, cell block and Papanicolaou smear"
        },
        {
         "code": "90.39",
         "name": "Microscopic examination of specimen from ear, nose, throat, and larynx, other microscopic examination"
        },
        {
         "code": "90.41",
         "name": "Microscopic examination of specimen from trachea, bronchus, pleura, lung, and other thoracic specimen, and of sputum, bacterial smear"
        },
        {
         "code": "90.42",
         "name": "Microscopic examination of specimen from trachea, bronchus, pleura, lung, and other thoracic specimen, and of sputum, culture"
        },
        {
         "code": "90.43",
         "name": "Microscopic examination of specimen from trachea, bronchus, pleura, lung, and other thoracic specimen, and of sputum, culture and sensitivity"
        },
        {
         "code": "90.44",
         "name": "Microscopic examination of specimen from trachea, bronchus, pleura, lung, and other thoracic specimen, and of sputum, parasitology"
        },
        {
         "code": "90.45",
         "name": "Microscopic examination of specimen from trachea, bronchus, pleura, lung, and other thoracic specimen, and of sputum, toxicology"
        },
        {
         "code": "90.46",
         "name": "Microscopic examination of specimen from trachea, bronchus, pleura, lung, and other thoracic specimen, and of sputum, cell block and Papanicolaou smear"
        },
        {
         "code": "90.49",
         "name": "Microscopic examination of specimen from trachea, bronchus, pleura, lung, and other thoracic specimen, and of sputum, other microscopic examination"
        },
        {
         "code": "90.51",
         "name": "Microscopic examination of blood, bacterial smear"
        },
        {
         "code": "90.52",
         "name": "Microscopic examination of blood, culture"
        },
        {
         "code": "90.53",
         "name": "Microscopic examination of blood, culture and sensitivity"
        },
        {
         "code": "90.54",
         "name": "Microscopic examination of blood, parasitology"
        },
        {
         "code": "90.55",
         "name": "Microscopic examination of blood, toxicology"
        },
        {
         "code": "90.56",
         "name": "Microscopic examination of blood, cell block and Papanicolaou smear"
        },
        {
         "code": "90.59",
         "name": "Microscopic examination of blood, other microscopic examination"
        },
        {
         "code": "90.61",
         "name": "Microscopic examination of specimen from spleen and of bone marrow, bacterial smear"
        },
        {
         "code": "90.62",
         "name": "Microscopic examination of specimen from spleen and of bone marrow, culture"
        },
        {
         "code": "90.63",
         "name": "Microscopic examination of specimen from spleen and of bone marrow, culture and sensitivity"
        },
        {
         "code": "90.64",
         "name": "Microscopic examination of specimen from spleen and of bone marrow, parasitology"
        },
        {
         "code": "90.65",
         "name": "Microscopic examination of specimen from spleen and of bone marrow, toxicology"
        },
        {
         "code": "90.66",
         "name": "Microscopic examination of specimen from spleen and of bone marrow, cell block and Papanicolaou smear"
        },
        {
         "code": "90.69",
         "name": "Microscopic examination of specimen from spleen and of bone marrow, other microscopic examination"
        },
        {
         "code": "90.71",
         "name": "Microscopic examination of specimen from lymph node and of lymph, bacterial smear"
        },
        {
         "code": "90.72",
         "name": "Microscopic examination of specimen from lymph node and of lymph, culture"
        },
        {
         "code": "90.73",
         "name": "Microscopic examination of specimen from lymph node and of lymph, culture and sensitivity"
        },
        {
         "code": "90.74",
         "name": "Microscopic examination of specimen from lymph node and of lymph, parasitology"
        },
        {
         "code": "90.75",
         "name": "Microscopic examination of specimen from lymph node and of lymph, toxicology"
        },
        {
         "code": "90.76",
         "name": "Microscopic examination of specimen from lymph node and of lymph, cell block and Papanicolaou smear"
        },
        {
         "code": "90.79",
         "name": "Microscopic examination of specimen from lymph node and of lymph, other microscopic examination"
        },
        {
         "code": "90.81",
         "name": "Microscopic examination of specimen from upper gastrointestinal tract and of vomitus, bacterial smear"
        },
        {
         "code": "90.82",
         "name": "Microscopic examination of specimen from upper gastrointestinal tract and of vomitus, culture"
        },
        {
         "code": "90.83",
         "name": "Microscopic examination of specimen from upper gastrointestinal tract and of vomitus, culture and sensitivity"
        },
        {
         "code": "90.84",
         "name": "Microscopic examination of specimen from upper gastrointestinal tract and of vomitus, parasitology"
        },
        {
         "code": "90.85",
         "name": "Microscopic examination of specimen from upper gastrointestinal tract and of vomitus, toxicology"
        },
        {
         "code": "90.86",
         "name": "Microscopic examination of specimen from upper gastrointestinal tract and of vomitus, cell block and Papanicolaou smear"
        },
        {
         "code": "90.89",
         "name": "Microscopic examination of specimen from upper gastrointestinal tract and of vomitus, other microscopic examination"
        },
        {
         "code": "90.91",
         "name": "Microscopic examination of specimen from lower gastrointestinal tract and of stool, bacterial smear"
        },
        {
         "code": "90.92",
         "name": "Microscopic examination of specimen from lower gastrointestinal tract and of stool, culture"
        },
        {
         "code": "90.93",
         "name": "Microscopic examination of specimen from lower gastrointestinal tract and of stool, culture and sensitivity"
        },
        {
         "code": "90.94",
         "name": "Microscopic examination of specimen from lower gastrointestinal tract and of stool, parasitology"
        },
        {
         "code": "90.95",
         "name": "Microscopic examination of specimen from lower gastrointestinal tract and of stool, toxicology"
        },
        {
         "code": "90.96",
         "name": "Microscopic examination of specimen from lower gastrointestinal tract and of stool, cell block and Papanicolaou smear"
        },
        {
         "code": "90.99",
         "name": "Microscopic examination of specimen from lower gastrointestinal tract and of stool, other microscopic examination"
        },
        {
         "code": "91.01",
         "name": "Microscopic examination of specimen from liver, biliary tract, and pancreas, bacterial smear"
        },
        {
         "code": "91.02",
         "name": "Microscopic examination of specimen from liver, biliary tract, and pancreas, culture"
        },
        {
         "code": "91.03",
         "name": "Microscopic examination of specimen from liver, biliary tract, and pancreas, culture and sensitivity"
        },
        {
         "code": "91.04",
         "name": "Microscopic examination of specimen from liver, biliary tract, and pancreas, parasitology"
        },
        {
         "code": "91.05",
         "name": "Microscopic examination of specimen from liver, biliary tract, and pancreas, toxicology"
        },
        {
         "code": "91.06",
         "name": "Microscopic examination of specimen from liver, biliary tract, and pancreas, cell block and Papanicolaou smear"
        },
        {
         "code": "91.09",
         "name": "Microscopic examination of specimen from liver, biliary tract, and pancreas, other microscopic examination"
        },
        {
         "code": "91.11",
         "name": "Microscopic examination of peritoneal and retroperitoneal specimen, bacterial smear"
        },
        {
         "code": "91.12",
         "name": "Microscopic examination of peritoneal and retroperitoneal specimen, culture"
        },
        {
         "code": "91.13",
         "name": "Microscopic examination of peritoneal and retroperitoneal specimen, culture and sensitivity"
        },
        {
         "code": "91.14",
         "name": "Microscopic examination of peritoneal and retroperitoneal specimen, parasitology"
        },
        {
         "code": "91.15",
         "name": "Microscopic examination of peritoneal and retroperitoneal specimen, toxicology"
        },
        {
         "code": "91.16",
         "name": "Microscopic examination of peritoneal and retroperitoneal specimen, cell block and Papanicolaou smear"
        },
        {
         "code": "91.19",
         "name": "Microscopic examination of peritoneal and retroperitoneal specimen, other microscopic examination"
        },
        {
         "code": "91.21",
         "name": "Microscopic examination of specimen from kidney, ureter, perirenal and periureteral tissue, bacterial smear"
        },
        {
         "code": "91.22",
         "name": "Microscopic examination of specimen from kidney, ureter, perirenal and periureteral tissue, culture"
        },
        {
         "code": "91.23",
         "name": "Microscopic examination of specimen from kidney, ureter, perirenal and periureteral tissue, culture and sensitivity"
        },
        {
         "code": "91.24",
         "name": "Microscopic examination of specimen from kidney, ureter, perirenal and periureteral tissue, parasitology"
        },
        {
         "code": "91.25",
         "name": "Microscopic examination of specimen from kidney, ureter, perirenal and periureteral tissue, toxicology"
        },
        {
         "code": "91.26",
         "name": "Microscopic examination of specimen from kidney, ureter, perirenal and periureteral tissue, cell block and Papanicolaou smear"
        },
        {
         "code": "91.29",
         "name": "Microscopic examination of specimen from kidney, ureter, perirenal and periureteral tissue, other microscopic examination"
        },
        {
         "code": "91.31",
         "name": "Microscopic examination of specimen from bladder, urethra, prostate, seminal vesicle, perivesical tissue, and of urine and semen, bacterial smear"
        },
        {
         "code": "91.32",
         "name": "Microscopic examination of specimen from bladder, urethra, prostate, seminal vesicle, perivesical tissue, and of urine and semen, culture"
        },
        {
         "code": "91.33",
         "name": "Microscopic examination of specimen from bladder, urethra, prostate, seminal vesicle, perivesical tissue, and of urine and semen, culture and sensitivity"
        },
        {
         "code": "91.34",
         "name": "Microscopic examination of specimen from bladder, urethra, prostate, seminal vesicle, perivesical tissue, and of urine and semen, parasitology"
        },
        {
         "code": "91.35",
         "name": "Microscopic examination of specimen from bladder, urethra, prostate, seminal vesicle, perivesical tissue, and of urine and semen, toxicology"
        },
        {
         "code": "91.36",
         "name": "Microscopic examination of specimen from bladder, urethra, prostate, seminal vesicle, perivesical tissue, and of urine and semen, cell block and Papanicolaou smear"
        },
        {
         "code": "91.39",
         "name": "Microscopic examination of specimen from bladder, urethra, prostate, seminal vesicle, perivesical tissue, and of urine and semen, other microscopic examination"
        },
        {
         "code": "91.41",
         "name": "Microscopic examination of specimen from female genital tract, bacterial smear"
        },
        {
         "code": "91.42",
         "name": "Microscopic examination of specimen from female genital tract, culture"
        },
        {
         "code": "91.43",
         "name": "Microscopic examination of specimen from female genital tract, culture and sensitivity"
        },
        {
         "code": "91.44",
         "name": "Microscopic examination of specimen from female genital tract, parasitology"
        },
        {
         "code": "91.45",
         "name": "Microscopic examination of specimen from female genital tract, toxicology"
        },
        {
         "code": "91.46",
         "name": "Microscopic examination of specimen from female genital tract, cell block and Papanicolaou smear"
        },
        {
         "code": "91.49",
         "name": "Microscopic examination of specimen from female genital tract, other microscopic examination"
        },
        {
         "code": "91.51",
         "name": "Microscopic examination of specimen from musculoskeletal system and of joint fluid, bacterial smear"
        },
        {
         "code": "91.52",
         "name": "Microscopic examination of specimen from musculoskeletal system and of joint fluid, culture"
        },
        {
         "code": "91.53",
         "name": "Microscopic examination of specimen from musculoskeletal system and of joint fluid, culture and sensitivity"
        },
        {
         "code": "91.54",
         "name": "Microscopic examination of specimen from musculoskeletal system and of joint fluid, parasitology"
        },
        {
         "code": "91.55",
         "name": "Microscopic examination of specimen from musculoskeletal system and of joint fluid, toxicology"
        },
        {
         "code": "91.56",
         "name": "Microscopic examination of specimen from musculoskeletal system and of joint fluid, cell block and Papanicolaou smear"
        },
        {
         "code": "91.59",
         "name": "Microscopic examination of specimen from musculoskeletal system and of joint fluid, other microscopic examination"
        },
        {
         "code": "91.61",
         "name": "Microscopic examination of specimen from skin and other integument, bacterial smear"
        },
        {
         "code": "91.62",
         "name": "Microscopic examination of specimen from skin and other integument, culture"
        },
        {
         "code": "91.63",
         "name": "Microscopic examination of specimen from skin and other integument, culture and sensitivity"
        },
        {
         "code": "91.64",
         "name": "Microscopic examination of specimen from skin and other integument, parasitology"
        },
        {
         "code": "91.65",
         "name": "Microscopic examination of specimen from skin and other integument, toxicology"
        },
        {
         "code": "91.66",
         "name": "Microscopic examination of specimen from skin and other integument, cell block and Papanicolaou smear"
        },
        {
         "code": "91.69",
         "name": "Microscopic examination of specimen from skin and other integument, other microscopic examination"
        },
        {
         "code": "91.71",
         "name": "Microscopic examination of specimen from operative wound, bacterial smear"
        },
        {
         "code": "91.72",
         "name": "Microscopic examination of specimen from operative wound, culture"
        },
        {
         "code": "91.73",
         "name": "Microscopic examination of specimen from operative wound, culture and sensitivity"
        },
        {
         "code": "91.74",
         "name": "Microscopic examination of specimen from operative wound, parasitology"
        },
        {
         "code": "91.75",
         "name": "Microscopic examination of specimen from operative wound, toxicology"
        },
        {
         "code": "91.76",
         "name": "Microscopic examination of specimen from operative wound, cell block and Papanicolaou smear"
        },
        {
         "code": "91.79",
         "name": "Microscopic examination of specimen from operative wound, other microscopic examination"
        },
        {
         "code": "91.81",
         "name": "Microscopic examination of specimen from other site, bacterial smear"
        },
        {
         "code": "91.82",
         "name": "Microscopic examination of specimen from other site, culture"
        },
        {
         "code": "91.83",
         "name": "Microscopic examination of specimen from other site, culture and sensitivity"
        },
        {
         "code": "91.84",
         "name": "Microscopic examination of specimen from other site, parasitology"
        },
        {
         "code": "91.85",
         "name": "Microscopic examination of specimen from other site, toxicology"
        },
        {
         "code": "91.86",
         "name": "Microscopic examination of specimen from other site, cell block and Papanicolaou smear"
        },
        {
         "code": "91.89",
         "name": "Microscopic examination of specimen from other site, other microscopic examination"
        },
        {
         "code": "91.91",
         "name": "Microscopic examination of specimen from unspecified site, bacterial smear"
        },
        {
         "code": "91.92",
         "name": "Microscopic examination of specimen from unspecified site, culture"
        },
        {
         "code": "91.93",
         "name": "Microscopic examination of specimen from unspecified site, culture and sensitivity"
        },
        {
         "code": "91.94",
         "name": "Microscopic examination of specimen from unspecified site, parasitology"
        },
        {
         "code": "91.95",
         "name": "Microscopic examination of specimen from unspecified site, toxicology"
        },
        {
         "code": "91.96",
         "name": "Microscopic examination of specimen from unspecified site, cell block and Papanicolaou smear"
        },
        {
         "code": "91.99",
         "name": "Microscopic examination of specimen from unspecified site, other microscopic examination"
        },
        {
         "code": "92.01",
         "name": "Thyroid scan and radioisotope function studies"
        },
        {
         "code": "92.02",
         "name": "Liver scan and radioisotope function study"
        },
        {
         "code": "92.03",
         "name": "Renal scan and radioisotope function study"
        },
        {
         "code": "92.04",
         "name": "Gastrointestinal scan and radioisotope function study"
        },
        {
         "code": "92.05",
         "name": "Cardiovascular and hematopoietic scan and radioisotope function study"
        },
        {
         "code": "92.09",
         "name": "Other radioisotope function studies"
        },
        {
         "code": "92.11",
         "name": "Cerebral scan"
        },
        {
         "code": "92.12",
         "name": "Scan of other sites of head"
        },
        {
         "code": "92.13",
         "name": "Parathyroid scan"
        },
        {
         "code": "92.14",
         "name": "Bone scan"
        },
        {
         "code": "92.15",
         "name": "Pulmonary scan"
        },
        {
         "code": "92.16",
         "name": "Scan of lymphatic system"
        },
        {
         "code": "92.17",
         "name": "Placental scan"
        },
        {
         "code": "92.18",
         "name": "Total body scan"
        },
        {
         "code": "92.19",
         "name": "Scan of other sites"
        },
        {
         "code": "92.20",
         "name": "Infusion of liquid brachytherapy radioisotope"
        },
        {
         "code": "92.21",
         "name": "Superficial radiation"
        },
        {
         "code": "92.22",
         "name": "Orthovoltage radiation"
        },
        {
         "code": "92.23",
         "name": "Radioisotopic teleradiotherapy"
        },
        {
         "code": "92.24",
         "name": "Teleradiotherapy using photons"
        },
        {
         "code": "92.25",
         "name": "Teleradiotherapy using electrons"
        },
        {
         "code": "92.26",
         "name": "Teleradiotherapy of other particulate radiation"
        },
        {
         "code": "92.27",
         "name": "Implantation or insertion of radioactive elements"
        },
        {
         "code": "92.28",
         "name": "Injection or instillation of radioisotopes"
        },
        {
         "code": "92.29",
         "name": "Other radiotherapeutic procedure"
        },
        {
         "code": "92.30",
         "name": "Stereotactic radiosurgery, not otherwise specified"
        },
        {
         "code": "92.31",
         "name": "Single source photon radiosurgery"
        },
        {
         "code": "92.32",
         "name": "Multi-source photon radiosurgery"
        },
        {
         "code": "92.33",
         "name": "Particulate radiosurgery"
        },
        {
         "code": "92.39",
         "name": "Stereotactic radiosurgery, not elsewhere classified"
        },
        {
         "code": "92.41",
         "name": "Intra-operative electron radiation therapy"
        },
        {
         "code": "93.01",
         "name": "Functional evaluation"
        },
        {
         "code": "93.02",
         "name": "Orthotic evaluation"
        },
        {
         "code": "93.03",
         "name": "Prosthetic evaluation"
        },
        {
         "code": "93.04",
         "name": "Manual testing of muscle function"
        },
        {
         "code": "93.05",
         "name": "Range of motion testing"
        },
        {
         "code": "93.06",
         "name": "Measurement of limb length"
        },
        {
         "code": "93.07",
         "name": "Body measurement"
        },
        {
         "code": "93.08",
         "name": "Electromyography"
        },
        {
         "code": "93.09",
         "name": "Other diagnostic physical therapy procedure"
        },
        {
         "code": "93.11",
         "name": "Assisting exercise"
        },
        {
         "code": "93.12",
         "name": "Other active musculoskeletal exercise"
        },
        {
         "code": "93.13",
         "name": "Resistive exercise"
        },
        {
         "code": "93.14",
         "name": "Training in joint movements"
        },
        {
         "code": "93.15",
         "name": "Mobilization of spine"
        },
        {
         "code": "93.16",
         "name": "Mobilization of other joints"
        },
        {
         "code": "93.17",
         "name": "Other passive musculoskeletal exercise"
        },
        {
         "code": "93.18",
         "name": "Breathing exercise"
        },
        {
         "code": "93.19",
         "name": "Exercise, not elsewhere classified"
        },
        {
         "code": "93.21",
         "name": "Manual and mechanical traction"
        },
        {
         "code": "93.22",
         "name": "Ambulation and gait training"
        },
        {
         "code": "93.23",
         "name": "Fitting of orthotic device"
        },
        {
         "code": "93.24",
         "name": "Training in use of prosthetic or orthotic device"
        },
        {
         "code": "93.25",
         "name": "Forced extension of limb"
        },
        {
         "code": "93.26",
         "name": "Manual rupture of joint adhesions"
        },
        {
         "code": "93.27",
         "name": "Stretching of muscle or tendon"
        },
        {
         "code": "93.28",
         "name": "Stretching of fascia"
        },
        {
         "code": "93.29",
         "name": "Other forcible correction of musculoskeletal deformity"
        },
        {
         "code": "93.31",
         "name": "Assisted exercise in pool"
        },
        {
         "code": "93.32",
         "name": "Whirlpool treatment"
        },
        {
         "code": "93.33",
         "name": "Other hydrotherapy"
        },
        {
         "code": "93.34",
         "name": "Diathermy"
        },
        {
         "code": "93.35",
         "name": "Other heat therapy"
        },
        {
         "code": "93.36",
         "name": "Cardiac retraining"
        },
        {
         "code": "93.37",
         "name": "Prenatal training"
        },
        {
         "code": "93.38",
         "name": "Combined physical therapy without mention of the components"
        },
        {
         "code": "93.39",
         "name": "Other physical therapy"
        },
        {
         "code": "93.41",
         "name": "Spinal traction using skull device"
        },
        {
         "code": "93.42",
         "name": "Other spinal traction"
        },
        {
         "code": "93.43",
         "name": "Intermittent skeletal traction"
        },
        {
         "code": "93.44",
         "name": "Other skeletal traction"
        },
        {
         "code": "93.45",
         "name": "Thomas' splint traction"
        },
        {
         "code": "93.46",
         "name": "Other skin traction of limbs"
        },
        {
         "code": "93.51",
         "name": "Application of plaster jacket"
        },
        {
         "code": "93.52",
         "name": "Application of neck support"
        },
        {
         "code": "93.53",
         "name": "Application of other cast"
        },
        {
         "code": "93.54",
         "name": "Application of splint"
        },
        {
         "code": "93.55",
         "name": "Dental wiring"
        },
        {
         "code": "93.56",
         "name": "Application of pressure dressing"
        },
        {
         "code": "93.57",
         "name": "Application of other wound dressing"
        },
        {
         "code": "93.58",
         "name": "Application of pressure trousers"
        },
        {
         "code": "93.59",
         "name": "Other immobilization, pressure, and attention to wound"
        },
        {
         "code": "93.61",
         "name": "Osteopathic manipulative treatment for general mobilization"
        },
        {
         "code": "93.62",
         "name": "Osteopathic manipulative treatment using high-velocity, low-amplitude forces"
        },
        {
         "code": "93.63",
         "name": "Osteopathic manipulative treatment using low- velocity, high-amplitude forces"
        },
        {
         "code": "93.64",
         "name": "Osteopathic manipulative treatment using isotonic, isometric forces"
        },
        {
         "code": "93.65",
         "name": "Osteopathic manipulative treatment using indirect forces"
        },
        {
         "code": "93.66",
         "name": "Osteopathic manipulative treatment to move tissue fluids"
        },
        {
         "code": "93.67",
         "name": "Other specified osteopathic manipulative treatment"
        },
        {
         "code": "93.71",
         "name": "Dyslexia training"
        },
        {
         "code": "93.72",
         "name": "Dysphasia training"
        },
        {
         "code": "93.73",
         "name": "Esophageal speech training"
        },
        {
         "code": "93.74",
         "name": "Speech defect training"
        },
        {
         "code": "93.75",
         "name": "Other speech training and therapy"
        },
        {
         "code": "93.76",
         "name": "Training in use of lead dog for the blind"
        },
        {
         "code": "93.77",
         "name": "Training in braille or moon"
        },
        {
         "code": "93.78",
         "name": "Other rehabilitation for the blind"
        },
        {
         "code": "93.81",
         "name": "Recreation therapy"
        },
        {
         "code": "93.82",
         "name": "Educational therapy"
        },
        {
         "code": "93.83",
         "name": "Occupational therapy"
        },
        {
         "code": "93.84",
         "name": "Music therapy"
        },
        {
         "code": "93.85",
         "name": "Vocational rehabilitation"
        },
        {
         "code": "93.89",
         "name": "Rehabilitation, not elsewhere classified"
        },
        {
         "code": "93.90",
         "name": "Non-invasive mechanical ventilation"
        },
        {
         "code": "93.91",
         "name": "Intermittent positive pressure breathing [IPPB]"
        },
        {
         "code": "93.93",
         "name": "Nonmechanical methods of resuscitation"
        },
        {
         "code": "93.94",
         "name": "Respiratory medication administered by nebulizer"
        },
        {
         "code": "93.95",
         "name": "Hyperbaric oxygenation"
        },
        {
         "code": "93.96",
         "name": "Other oxygen enrichment"
        },
        {
         "code": "93.97",
         "name": "Decompression chamber"
        },
        {
         "code": "93.98",
         "name": "Other control of atmospheric pressure and composition"
        },
        {
         "code": "93.99",
         "name": "Other respiratory procedures"
        },
        {
         "code": "94.01",
         "name": "Administration of intelligence test"
        },
        {
         "code": "94.02",
         "name": "Administration of psychologic test"
        },
        {
         "code": "94.03",
         "name": "Character analysis"
        },
        {
         "code": "94.08",
         "name": "Other psychologic evaluation and testing"
        },
        {
         "code": "94.09",
         "name": "Psychologic mental status determination, not otherwise specified"
        },
        {
         "code": "94.11",
         "name": "Psychiatric mental status determination"
        },
        {
         "code": "94.12",
         "name": "Routine psychiatric visit, not otherwise specified"
        },
        {
         "code": "94.13",
         "name": "Psychiatric commitment evaluation"
        },
        {
         "code": "94.19",
         "name": "Other psychiatric interview and evaluation"
        },
        {
         "code": "94.21",
         "name": "Narcoanalysis"
        },
        {
         "code": "94.22",
         "name": "Lithium therapy"
        },
        {
         "code": "94.23",
         "name": "Neuroleptic therapy"
        },
        {
         "code": "94.24",
         "name": "Chemical shock therapy"
        },
        {
         "code": "94.25",
         "name": "Other psychiatric drug therapy"
        },
        {
         "code": "94.26",
         "name": "Subconvulsive electroshock therapy"
        },
        {
         "code": "94.27",
         "name": "Other electroshock therapy"
        },
        {
         "code": "94.29",
         "name": "Other psychiatric somatotherapy"
        },
        {
         "code": "94.31",
         "name": "Psychoanalysis"
        },
        {
         "code": "94.32",
         "name": "Hypnotherapy"
        },
        {
         "code": "94.33",
         "name": "Behavior therapy"
        },
        {
         "code": "94.34",
         "name": "Individual therapy for psychosexual dysfunction"
        },
        {
         "code": "94.35",
         "name": "Crisis intervention"
        },
        {
         "code": "94.36",
         "name": "Play psychotherapy"
        },
        {
         "code": "94.37",
         "name": "Exploratory verbal psychotherapy"
        },
        {
         "code": "94.38",
         "name": "Supportive verbal psychotherapy"
        },
        {
         "code": "94.39",
         "name": "Other individual psychotherapy"
        },
        {
         "code": "94.41",
         "name": "Group therapy for psychosexual dysfunction"
        },
        {
         "code": "94.42",
         "name": "Family therapy"
        },
        {
         "code": "94.43",
         "name": "Psychodrama"
        },
        {
         "code": "94.44",
         "name": "Other group therapy"
        },
        {
         "code": "94.45",
         "name": "Drug addiction counseling"
        },
        {
         "code": "94.46",
         "name": "Alcoholism counseling"
        },
        {
         "code": "94.49",
         "name": "Other counseling"
        },
        {
         "code": "94.51",
         "name": "Referral for psychotherapy"
        },
        {
         "code": "94.52",
         "name": "Referral for psychiatric aftercare"
        },
        {
         "code": "94.53",
         "name": "Referral for alcoholism rehabilitation"
        },
        {
         "code": "94.54",
         "name": "Referral for drug addiction rehabilitation"
        },
        {
         "code": "94.55",
         "name": "Referral for vocational rehabilitation"
        },
        {
         "code": "94.59",
         "name": "Referral for other psychologic rehabilitation"
        },
        {
         "code": "94.61",
         "name": "Alcohol rehabilitation"
        },
        {
         "code": "94.62",
         "name": "Alcohol detoxification"
        },
        {
         "code": "94.63",
         "name": "Alcohol rehabilitation and detoxification"
        },
        {
         "code": "94.64",
         "name": "Drug rehabilitation"
        },
        {
         "code": "94.65",
         "name": "Drug detoxification"
        },
        {
         "code": "94.66",
         "name": "Drug rehabilitation and detoxification"
        },
        {
         "code": "94.67",
         "name": "Combined alcohol and drug rehabilitation"
        },
        {
         "code": "94.68",
         "name": "Combined alcohol and drug detoxification"
        },
        {
         "code": "94.69",
         "name": "Combined alcohol and drug rehabilitation and detoxification"
        },
        {
         "code": "95.01",
         "name": "Limited eye examination"
        },
        {
         "code": "95.02",
         "name": "Comprehensive eye examination"
        },
        {
         "code": "95.03",
         "name": "Extended ophthalmologic work-up"
        },
        {
         "code": "95.04",
         "name": "Eye examination under anesthesia"
        },
        {
         "code": "95.05",
         "name": "Visual field study"
        },
        {
         "code": "95.06",
         "name": "Color vision study"
        },
        {
         "code": "95.07",
         "name": "Dark adaptation study"
        },
        {
         "code": "95.09",
         "name": "Eye examination, not otherwise specified"
        },
        {
         "code": "95.11",
         "name": "Fundus photography"
        },
        {
         "code": "95.12",
         "name": "Fluorescein angiography or angioscopy of eye"
        },
        {
         "code": "95.13",
         "name": "Ultrasound study of eye"
        },
        {
         "code": "95.14",
         "name": "X-ray study of eye"
        },
        {
         "code": "95.15",
         "name": "Ocular motility study"
        },
        {
         "code": "95.16",
         "name": "P32 and other tracer studies of eye"
        },
        {
         "code": "95.21",
         "name": "Electroretinogram [ERG]"
        },
        {
         "code": "95.22",
         "name": "Electro-oculogram [EOG]"
        },
        {
         "code": "95.23",
         "name": "Visual evoked potential [VEP]"
        },
        {
         "code": "95.24",
         "name": "Electronystagmogram [ENG]"
        },
        {
         "code": "95.25",
         "name": "Electromyogram of eye [EMG]"
        },
        {
         "code": "95.26",
         "name": "Tonography, provocative tests, and other glaucoma testing"
        },
        {
         "code": "95.31",
         "name": "Fitting and dispensing of spectacles"
        },
        {
         "code": "95.32",
         "name": "Prescription, fitting, and dispensing of contact lens"
        },
        {
         "code": "95.33",
         "name": "Dispensing of other low vision aids"
        },
        {
         "code": "95.34",
         "name": "Ocular prosthetics"
        },
        {
         "code": "95.35",
         "name": "Orthoptic training"
        },
        {
         "code": "95.36",
         "name": "Ophthalmologic counseling and instruction"
        },
        {
         "code": "95.41",
         "name": "Audiometry"
        },
        {
         "code": "95.42",
         "name": "Clinical test of hearing"
        },
        {
         "code": "95.43",
         "name": "Audiological evaluation"
        },
        {
         "code": "95.44",
         "name": "Clinical vestibular function tests"
        },
        {
         "code": "95.45",
         "name": "Rotation tests"
        },
        {
         "code": "95.46",
         "name": "Other auditory and vestibular function tests"
        },
        {
         "code": "95.47",
         "name": "Hearing examination, not otherwise specified"
        },
        {
         "code": "95.48",
         "name": "Fitting of hearing aid"
        },
        {
         "code": "95.49",
         "name": "Other nonoperative procedures related to hearing"
        },
        {
         "code": "96.01",
         "name": "Insertion of nasopharyngeal airway"
        },
        {
         "code": "96.02",
         "name": "Insertion of oropharyngeal airway"
        },
        {
         "code": "96.03",
         "name": "Insertion of esophageal obturator airway"
        },
        {
         "code": "96.04",
         "name": "Insertion of endotracheal tube"
        },
        {
         "code": "96.05",
         "name": "Other intubation of respiratory tract"
        },
        {
         "code": "96.06",
         "name": "Insertion of Sengstaken tube"
        },
        {
         "code": "96.07",
         "name": "Insertion of other (naso-)gastric tube"
        },
        {
         "code": "96.08",
         "name": "Insertion of (naso-)intestinal tube"
        },
        {
         "code": "96.09",
         "name": "Insertion of rectal tube"
        },
        {
         "code": "96.11",
         "name": "Packing of external auditory canal"
        },
        {
         "code": "96.14",
         "name": "Vaginal packing"
        },
        {
         "code": "96.15",
         "name": "Insertion of vaginal mold"
        },
        {
         "code": "96.16",
         "name": "Other vaginal dilation"
        },
        {
         "code": "96.17",
         "name": "Insertion of vaginal diaphragm"
        },
        {
         "code": "96.18",
         "name": "Insertion of other vaginal pessary"
        },
        {
         "code": "96.19",
         "name": "Rectal packing"
        },
        {
         "code": "96.21",
         "name": "Dilation of frontonasal duct"
        },
        {
         "code": "96.22",
         "name": "Dilation of rectum"
        },
        {
         "code": "96.23",
         "name": "Dilation of anal sphincter"
        },
        {
         "code": "96.24",
         "name": "Dilation and manipulation of enterostomy stoma"
        },
        {
         "code": "96.25",
         "name": "Therapeutic distention of bladder"
        },
        {
         "code": "96.26",
         "name": "Manual reduction of rectal prolapse"
        },
        {
         "code": "96.27",
         "name": "Manual reduction of hernia"
        },
        {
         "code": "96.28",
         "name": "Manual reduction of enterostomy prolapse"
        },
        {
         "code": "96.29",
         "name": "Reduction of intussusception of alimentary tract"
        },
        {
         "code": "96.31",
         "name": "Gastric cooling"
        },
        {
         "code": "96.32",
         "name": "Gastric freezing"
        },
        {
         "code": "96.33",
         "name": "Gastric lavage"
        },
        {
         "code": "96.34",
         "name": "Other irrigation of (naso-)gastric tube"
        },
        {
         "code": "96.35",
         "name": "Gastric gavage"
        },
        {
         "code": "96.36",
         "name": "Irrigation of gastrostomy or enterostomy"
        },
        {
         "code": "96.37",
         "name": "Proctoclysis"
        },
        {
         "code": "96.38",
         "name": "Removal of impacted feces"
        },
        {
         "code": "96.39",
         "name": "Other transanal enema"
        },
        {
         "code": "96.41",
         "name": "Irrigation of cholecystostomy and other biliary tube"
        },
        {
         "code": "96.42",
         "name": "Irrigation of pancreatic tube"
        },
        {
         "code": "96.43",
         "name": "Digestive tract instillation, except gastric gavage"
        },
        {
         "code": "96.44",
         "name": "Vaginal douche"
        },
        {
         "code": "96.45",
         "name": "Irrigation of nephrostomy and pyelostomy"
        },
        {
         "code": "96.46",
         "name": "Irrigation of ureterostomy and ureteral catheter"
        },
        {
         "code": "96.47",
         "name": "Irrigation of cystostomy"
        },
        {
         "code": "96.48",
         "name": "Irrigation of other indwelling urinary catheter"
        },
        {
         "code": "96.49",
         "name": "Other genitourinary instillation"
        },
        {
         "code": "96.51",
         "name": "Irrigation of eye"
        },
        {
         "code": "96.52",
         "name": "Irrigation of ear"
        },
        {
         "code": "96.53",
         "name": "Irrigation of nasal passages"
        },
        {
         "code": "96.54",
         "name": "Dental scaling, polishing, and debridement"
        },
        {
         "code": "96.55",
         "name": "Tracheostomy toilette"
        },
        {
         "code": "96.56",
         "name": "Other lavage of bronchus and trachea"
        },
        {
         "code": "96.57",
         "name": "Irrigation of vascular catheter"
        },
        {
         "code": "96.58",
         "name": "Irrigation of wound catheter"
        },
        {
         "code": "96.59",
         "name": "Other irrigation of wound"
        },
        {
         "code": "96.6",
         "name": "Enteral infusion of concentrated nutritional substances"
        },
        {
         "code": "96.70",
         "name": "Continuous invasive mechanical ventilation of unspecified duration"
        },
        {
         "code": "96.71",
         "name": "Continuous invasive mechanical ventilation for less than 96 consecutive hours"
        },
        {
         "code": "96.72",
         "name": "Continuous invasive mechanical ventilation for 96 consecutive hours or more"
        },
        {
         "code": "97.01",
         "name": "Replacement of (naso-)gastric or esophagostomy tube"
        },
        {
         "code": "97.02",
         "name": "Replacement of gastrostomy tube"
        },
        {
         "code": "97.03",
         "name": "Replacement of tube or enterostomy device of small intestine"
        },
        {
         "code": "97.04",
         "name": "Replacement of tube or enterostomy device of large intestine"
        },
        {
         "code": "97.05",
         "name": "Replacement of stent (tube) in biliary or pancreatic duct"
        },
        {
         "code": "97.11",
         "name": "Replacement of cast on upper limb"
        },
        {
         "code": "97.12",
         "name": "Replacement of cast on lower limb"
        },
        {
         "code": "97.13",
         "name": "Replacement of other cast"
        },
        {
         "code": "97.14",
         "name": "Replacement of other device for musculoskeletal immobilization"
        },
        {
         "code": "97.15",
         "name": "Replacement of wound catheter"
        },
        {
         "code": "97.16",
         "name": "Replacement of wound packing or drain"
        },
        {
         "code": "97.21",
         "name": "Replacement of nasal packing"
        },
        {
         "code": "97.22",
         "name": "Replacement of dental packing"
        },
        {
         "code": "97.23",
         "name": "Replacement of tracheostomy tube"
        },
        {
         "code": "97.24",
         "name": "Replacement and refitting of vaginal diaphragm"
        },
        {
         "code": "97.25",
         "name": "Replacement of other vaginal pessary"
        },
        {
         "code": "97.26",
         "name": "Replacement of vaginal or vulvar packing or drain"
        },
        {
         "code": "97.29",
         "name": "Other nonoperative replacements"
        },
        {
         "code": "97.31",
         "name": "Removal of eye prosthesis"
        },
        {
         "code": "97.32",
         "name": "Removal of nasal packing"
        },
        {
         "code": "97.33",
         "name": "Removal of dental wiring"
        },
        {
         "code": "97.34",
         "name": "Removal of dental packing"
        },
        {
         "code": "97.35",
         "name": "Removal of dental prosthesis"
        },
        {
         "code": "97.36",
         "name": "Removal of other external mandibular fixation device"
        },
        {
         "code": "97.37",
         "name": "Removal of tracheostomy tube"
        },
        {
         "code": "97.38",
         "name": "Removal of sutures from head and neck"
        },
        {
         "code": "97.39",
         "name": "Removal of other therapeutic device from head and neck"
        },
        {
         "code": "97.41",
         "name": "Removal of thoracotomy tube or pleural cavity drain"
        },
        {
         "code": "97.42",
         "name": "Removal of mediastinal drain"
        },
        {
         "code": "97.43",
         "name": "Removal of sutures from thorax"
        },
        {
         "code": "97.44",
         "name": "Nonoperative removal of heart assist system"
        },
        {
         "code": "97.49",
         "name": "Removal of other device from thorax"
        },
        {
         "code": "97.51",
         "name": "Removal of gastrostomy tube"
        },
        {
         "code": "97.52",
         "name": "Removal of tube from small intestine"
        },
        {
         "code": "97.53",
         "name": "Removal of tube from large intestine or appendix"
        },
        {
         "code": "97.54",
         "name": "Removal of cholecystostomy tube"
        },
        {
         "code": "97.55",
         "name": "Removal of T-tube, other bile duct tube, or liver tube"
        },
        {
         "code": "97.56",
         "name": "Removal of pancreatic tube or drain"
        },
        {
         "code": "97.59",
         "name": "Removal of other device from digestive system"
        },
        {
         "code": "97.61",
         "name": "Removal of pyelostomy and nephrostomy tube"
        },
        {
         "code": "97.62",
         "name": "Removal of ureterostomy tube and ureteral catheter"
        },
        {
         "code": "97.63",
         "name": "Removal of cystostomy tube"
        },
        {
         "code": "97.64",
         "name": "Removal of other urinary drainage device"
        },
        {
         "code": "97.65",
         "name": "Removal of urethral stent"
        },
        {
         "code": "97.69",
         "name": "Removal of other device from urinary system"
        },
        {
         "code": "97.71",
         "name": "Removal of intrauterine contraceptive device"
        },
        {
         "code": "97.72",
         "name": "Removal of intrauterine pack"
        },
        {
         "code": "97.73",
         "name": "Removal of vaginal diaphragm"
        },
        {
         "code": "97.74",
         "name": "Removal of other vaginal pessary"
        },
        {
         "code": "97.75",
         "name": "Removal of vaginal or vulvar packing"
        },
        {
         "code": "97.79",
         "name": "Removal of other device from genital tract"
        },
        {
         "code": "97.81",
         "name": "Removal of retroperitoneal drainage device"
        },
        {
         "code": "97.82",
         "name": "Removal of peritoneal drainage device"
        },
        {
         "code": "97.83",
         "name": "Removal of abdominal wall sutures"
        },
        {
         "code": "97.84",
         "name": "Removal of sutures from trunk, not elsewhere classified"
        },
        {
         "code": "97.85",
         "name": "Removal of packing from trunk, not elsewhere classified"
        },
        {
         "code": "97.86",
         "name": "Removal of other device from abdomen"
        },
        {
         "code": "97.87",
         "name": "Removal of other device from trunk"
        },
        {
         "code": "97.88",
         "name": "Removal of external immobilization device"
        },
        {
         "code": "97.89",
         "name": "Removal of other therapeutic device"
        },
        {
         "code": "98.01",
         "name": "Removal of intraluminal foreign body from mouth without incision"
        },
        {
         "code": "98.02",
         "name": "Removal of intraluminal foreign body from esophagus without incision"
        },
        {
         "code": "98.03",
         "name": "Removal of intraluminal foreign body from stomach and small intestine without incision"
        },
        {
         "code": "98.04",
         "name": "Removal of intraluminal foreign body from large intestine without incision"
        },
        {
         "code": "98.05",
         "name": "Removal of intraluminal foreign body from rectum and anus without incision"
        },
        {
         "code": "98.11",
         "name": "Removal of intraluminal foreign body from ear without incision"
        },
        {
         "code": "98.12",
         "name": "Removal of intraluminal foreign body from nose without incision"
        },
        {
         "code": "98.13",
         "name": "Removal of intraluminal foreign body from pharynx without incision"
        },
        {
         "code": "98.14",
         "name": "Removal of intraluminal foreign body from larynx without incision"
        },
        {
         "code": "98.15",
         "name": "Removal of intraluminal foreign body from trachea and bronchus without incision"
        },
        {
         "code": "98.16",
         "name": "Removal of intraluminal foreign body from uterus without incision"
        },
        {
         "code": "98.17",
         "name": "Removal of intraluminal foreign body from vagina without incision"
        },
        {
         "code": "98.18",
         "name": "Removal of intraluminal foreign body from artificial stoma without incision"
        },
        {
         "code": "98.19",
         "name": "Removal of intraluminal foreign body from urethra without incision"
        },
        {
         "code": "98.20",
         "name": "Removal of foreign body, not otherwise specified"
        },
        {
         "code": "98.21",
         "name": "Removal of superficial foreign body from eye without incision"
        },
        {
         "code": "98.22",
         "name": "Removal of other foreign body without incision from head and neck"
        },
        {
         "code": "98.23",
         "name": "Removal of foreign body from vulva without incision"
        },
        {
         "code": "98.24",
         "name": "Removal of foreign body from scrotum or penis without incision"
        },
        {
         "code": "98.25",
         "name": "Removal of other foreign body without incision from trunk except scrotum, penis, or vulva"
        },
        {
         "code": "98.26",
         "name": "Removal of foreign body from hand without incision"
        },
        {
         "code": "98.27",
         "name": "Removal of foreign body without incision from upper limb, except hand"
        },
        {
         "code": "98.28",
         "name": "Removal of foreign body from foot without incision"
        },
        {
         "code": "98.29",
         "name": "Removal of foreign body without incision from lower limb, except foot"
        },
        {
         "code": "98.51",
         "name": "Extracorporeal shockwave lithotripsy [ESWL] of the kidney, ureter and\/or bladder"
        },
        {
         "code": "98.52",
         "name": "Extracorporeal shockwave lithotripsy [ESWL] of the gallbladder and\/or bile duct"
        },
        {
         "code": "98.59",
         "name": "Extracorporeal shockwave lithotripsy of other sites"
        },
        {
         "code": "99.00",
         "name": "Perioperative autologous transfusion of whole blood or blood components"
        },
        {
         "code": "99.01",
         "name": "Exchange transfusion"
        },
        {
         "code": "99.02",
         "name": "Transfusion of previously collected autologous blood"
        },
        {
         "code": "99.03",
         "name": "Other transfusion of whole blood"
        },
        {
         "code": "99.04",
         "name": "Transfusion of packed cells"
        },
        {
         "code": "99.05",
         "name": "Transfusion of platelets"
        },
        {
         "code": "99.06",
         "name": "Transfusion of coagulation factors"
        },
        {
         "code": "99.07",
         "name": "Transfusion of other serum"
        },
        {
         "code": "99.08",
         "name": "Transfusion of blood expander"
        },
        {
         "code": "99.09",
         "name": "Transfusion of other substance"
        },
        {
         "code": "99.10",
         "name": "Injection or infusion of thrombolytic agent"
        },
        {
         "code": "99.11",
         "name": "Injection of Rh immune globulin"
        },
        {
         "code": "99.12",
         "name": "Immunization for allergy"
        },
        {
         "code": "99.13",
         "name": "Immunization for autoimmune disease"
        },
        {
         "code": "99.14",
         "name": "Injection or infusion of immunoglobulin"
        },
        {
         "code": "99.15",
         "name": "Parenteral infusion of concentrated nutritional substances"
        },
        {
         "code": "99.16",
         "name": "Injection of antidote"
        },
        {
         "code": "99.17",
         "name": "Injection of insulin"
        },
        {
         "code": "99.18",
         "name": "Injection or infusion of electrolytes"
        },
        {
         "code": "99.19",
         "name": "Injection of anticoagulant"
        },
        {
         "code": "99.20",
         "name": "Injection or infusion of platelet inhibitor"
        },
        {
         "code": "99.21",
         "name": "Injection of antibiotic"
        },
        {
         "code": "99.22",
         "name": "Injection of other anti-infective"
        },
        {
         "code": "99.23",
         "name": "Injection of steroid"
        },
        {
         "code": "99.24",
         "name": "Injection of other hormone"
        },
        {
         "code": "99.25",
         "name": "Injection or infusion of cancer chemotherapeutic substance"
        },
        {
         "code": "99.26",
         "name": "Injection of tranquilizer"
        },
        {
         "code": "99.27",
         "name": "Iontophoresis"
        },
        {
         "code": "99.28",
         "name": "Injection or infusion of biological response modifier [BRM] as an antineoplastic agent"
        },
        {
         "code": "99.29",
         "name": "Injection or infusion of other therapeutic or prophylactic substance"
        },
        {
         "code": "99.31",
         "name": "Vaccination against cholera"
        },
        {
         "code": "99.32",
         "name": "Vaccination against typhoid and paratyphoid fever"
        },
        {
         "code": "99.33",
         "name": "Vaccination against tuberculosis"
        },
        {
         "code": "99.34",
         "name": "Vaccination against plague"
        },
        {
         "code": "99.35",
         "name": "Vaccination against tularemia"
        },
        {
         "code": "99.36",
         "name": "Administration of diphtheria toxoid"
        },
        {
         "code": "99.37",
         "name": "Vaccination against pertussis"
        },
        {
         "code": "99.38",
         "name": "Administration of tetanus toxoid"
        },
        {
         "code": "99.39",
         "name": "Administration of diphtheria-tetanus-pertussis, combined"
        },
        {
         "code": "99.41",
         "name": "Administration of poliomyelitis vaccine"
        },
        {
         "code": "99.42",
         "name": "Vaccination against smallpox"
        },
        {
         "code": "99.43",
         "name": "Vaccination against yellow fever"
        },
        {
         "code": "99.44",
         "name": "Vaccination against rabies"
        },
        {
         "code": "99.45",
         "name": "Vaccination against measles"
        },
        {
         "code": "99.46",
         "name": "Vaccination against mumps"
        },
        {
         "code": "99.47",
         "name": "Vaccination against rubella"
        },
        {
         "code": "99.48",
         "name": "Administration of measles-mumps-rubella vaccine"
        },
        {
         "code": "99.51",
         "name": "Prophylactic vaccination against the common cold"
        },
        {
         "code": "99.52",
         "name": "Prophylactic vaccination against influenza"
        },
        {
         "code": "99.53",
         "name": "Prophylactic vaccination against arthropod-borne viral encephalitis"
        },
        {
         "code": "99.54",
         "name": "Prophylactic vaccination against other arthropod-borne viral diseases"
        },
        {
         "code": "99.55",
         "name": "Prophylactic administration of vaccine against other diseases"
        },
        {
         "code": "99.56",
         "name": "Administration of tetanus antitoxin"
        },
        {
         "code": "99.57",
         "name": "Administration of botulism antitoxin"
        },
        {
         "code": "99.58",
         "name": "Administration of other antitoxins"
        },
        {
         "code": "99.59",
         "name": "Other vaccination and inoculation"
        },
        {
         "code": "99.60",
         "name": "Cardiopulmonary resuscitation, not otherwise specified"
        },
        {
         "code": "99.61",
         "name": "Atrial cardioversion"
        },
        {
         "code": "99.62",
         "name": "Other electric countershock of heart"
        },
        {
         "code": "99.63",
         "name": "Closed chest cardiac massage"
        },
        {
         "code": "99.64",
         "name": "Carotid sinus stimulation"
        },
        {
         "code": "99.69",
         "name": "Other conversion of cardiac rhythm"
        },
        {
         "code": "99.71",
         "name": "Therapeutic plasmapheresis"
        },
        {
         "code": "99.72",
         "name": "Therapeutic leukopheresis"
        },
        {
         "code": "99.73",
         "name": "Therapeutic erythrocytapheresis"
        },
        {
         "code": "99.74",
         "name": "Therapeutic plateletpheresis"
        },
        {
         "code": "99.75",
         "name": "Administration of neuroprotective agent"
        },
        {
         "code": "99.76",
         "name": "Extracorporeal immunoadsorption"
        },
        {
         "code": "99.77",
         "name": "Application or administration of an adhesion barrier substance"
        },
        {
         "code": "99.78",
         "name": "Aquapheresis"
        },
        {
         "code": "99.79",
         "name": "Other therapeutic apheresis"
        },
        {
         "code": "99.81",
         "name": "Hypothermia (central) (local)"
        },
        {
         "code": "99.82",
         "name": "Ultraviolet light therapy"
        },
        {
         "code": "99.83",
         "name": "Other phototherapy"
        },
        {
         "code": "99.84",
         "name": "Isolation"
        },
        {
         "code": "99.85",
         "name": "Hyperthermia for treatment of cancer"
        },
        {
         "code": "99.86",
         "name": "Non-invasive placement of bone growth stimulator"
        },
        {
         "code": "99.88",
         "name": "Therapeutic photopheresis"
        },
        {
         "code": "99.91",
         "name": "Acupuncture for anesthesia"
        },
        {
         "code": "99.92",
         "name": "Other acupuncture"
        },
        {
         "code": "99.93",
         "name": "Rectal massage (for levator spasm)"
        },
        {
         "code": "99.94",
         "name": "Prostatic massage"
        },
        {
         "code": "99.95",
         "name": "Stretching of foreskin"
        },
        {
         "code": "99.96",
         "name": "Collection of sperm for artificial insemination"
        },
        {
         "code": "99.97",
         "name": "Fitting of denture"
        },
        {
         "code": "99.98",
         "name": "Extraction of milk from lactating breast"
        },
        {
         "code": "99.99",
         "name": "Other miscellaneous procedures"
        }
       ]
    )
  }
}
