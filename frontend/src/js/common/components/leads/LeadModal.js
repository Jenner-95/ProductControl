import React, { Component } from 'react';
import Modal from 'react-modal';
import LeadForm from './LeadForm';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TaskList from './TaskList'
import TaskForm from './TaskForm'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        height: '80%',
        padding: '20px',
    },
};


export default class LeadModal extends Component {
    render() {
        const { onSubmit, stateModal, closeModal, getChangeCoin, getUsuarios,
                getCompanies, getContacts, getChannel, changeTypeCoin,
                quetzals, convertCoin, getEmbudo, ver, idLead } = this.props;
                console.log('getEmbudo in Modal', getEmbudo)

        return (
            <div>
                
                    <Modal
                        isOpen={stateModal}
                        style={customStyles}
                    >   
                        <Tabs>
                            <TabList>
                                <Tab>Lead</Tab>
                                <Tab>Tareas</Tab>
                                <Tab>Actividades</Tab>
                            </TabList>
                        <TabPanel>
                            <LeadForm
                                stateModal={stateModal}
                                onSubmit={onSubmit}
                                closeModal={closeModal}
                                getChangeCoin={getChangeCoin}
                                getUsuarios={getUsuarios}
                                getCompanies={getCompanies}
                                getContacts={getContacts}
                                getChannel={getChannel}
                                changeTypeCoin={changeTypeCoin}
                                quetzals={quetzals}
                                convertCoin={convertCoin}
                                getEmbudo={getEmbudo}
                                ver={ver}
                                idLead={idLead}
                            />
                        </TabPanel>
                        <TabPanel>
                            <TaskForm
                                ver={ver}
                                closeModal={closeModal}
                            />
                        </TabPanel>
                        <TabPanel>

                        </TabPanel>
                        </Tabs>

                    </Modal>
            </div>
        );
    }
}
