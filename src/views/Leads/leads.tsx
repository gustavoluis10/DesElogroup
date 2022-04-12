import { useState } from 'react';
import { NewLeadModal } from '../../componentes/NewLeadModal/NewLeadModal';
import { LeadsPanel } from "../../componentes/LeadsPanel/Panel/leadsPanel"

export const Leads = (): JSX.Element => {
  const [isNewLeadModalOpen, setNewLeadModalOpen] = useState(false);

  return (
    <>
      <LeadsPanel
        onOpenNewLeadModal={()=>setNewLeadModalOpen(true)}
      />
      <NewLeadModal
        isOpen={isNewLeadModalOpen}
        onRequestClose={()=>setNewLeadModalOpen(false)}
      />
    </>
  );
}