import personService from "./services/persons";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [newFilter, setNewFilter] = useState("");
	const [notification, setNotification] = useState({
		message: null,
		type: null,
	});

	useEffect(() => {
		personService.getAll().then((initialPersons) => {
			setPersons(initialPersons);
		});
	}, []);

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	const handleFilterChange = (event) => {
		setNewFilter(event.target.value);
	};

	const addOrUpdatePerson = (event) => {
		event.preventDefault();
		const nameInPhonebook = persons.some((person) => person.name == newName);
		const numberUpdated = persons.some(
			(person) => person.name == newName && person.number != newNumber
		);

		if (nameInPhonebook && !numberUpdated) {
			notificationMessage("alreadyAdded", newName);
		} else if (nameInPhonebook && numberUpdated) {
			if (
				window.confirm(
					`${newName} is already added to phonebook, replace the old number with the new one?`
				)
			) {
				const personToUpdate = persons.find((person) => person.name == newName);
				console.log("needs to be updated", personToUpdate.name);
				const changedPerson = { ...personToUpdate, number: newNumber };
				personService
					.updateNumber(personToUpdate.id, changedPerson)
					.then((returnedPersonObject) => {
						setPersons(
							persons.map((person) =>
								person.id !== personToUpdate.id ? person : returnedPersonObject
							)
						);
						notificationMessage("update", newName);
						setNewName("");
						setNewNumber("");
					})
					.catch((error) => {
						console.error("ERROR", error.response.data);
						notificationMessage("alreadyDeleted", newName);
						setNewName("");
						setNewNumber("");
						setPersons(persons);
					});
			}
		} else {
			const personObject = {
				name: newName,
				number: newNumber,
			};

			personService
				.addPerson(personObject)
				.then((returnedPersonObject) => {
					setPersons(persons.concat(returnedPersonObject));
					setNewName("");
					setNewNumber("");
					notificationMessage("add", newName);
				})
				.catch((error) => {
					console.log(error.response.data);
					notificationMessage("invalid", undefined, error.response.data.error);
				});
		}
	};

	const deletePerson = (id) => {
		const personToDelete = persons.find((person) => person.id === id);
		if (
			window.confirm(`Do you really want to delete ${personToDelete.name}?`)
		) {
			console.log(`Deleted ${personToDelete.name}`);
			personService.deletePerson(id);
			const updatedPersons = persons.filter((person) => person.id !== id);
			setPersons(updatedPersons);
			notificationMessage("delete", personToDelete.name);
		}
	};

	const notificationMessage = (
		event,
		name = undefined,
		errorMessage = undefined
	) => {
		switch (event) {
			case "add":
				setNotification({
					message: `${name} successfully added`,
					type: "info",
				});
				break;
			case "delete":
				setNotification({
					message: `${name} successfully deleted`,
					type: "info",
				});
				break;
			case "update":
				setNotification({
					message: `${name} successfully updated`,
					type: "info",
				});
				break;
			case "alreadyAdded":
				setNotification({
					message: `${name} is already added to phonebook`,
					type: "error",
				});
				break;
			case "alreadyDeleted":
				setNotification({
					message: `update failed, ${name} has already been deleted from server`,
					type: "error",
				});
				break;
			case "invalid":
				setNotification({
					message: errorMessage,
					type: "error",
				});
				break;
		}
		setTimeout(() => {
			setNotification({ message: null, type: null });
		}, 5000);
	};

	const personsToShow =
		newFilter === ""
			? persons
			: persons.filter((person) =>
					person.name.toLowerCase().includes(newFilter)
			  );

	return (
		<div>
			<Notification message={notification.message} type={notification.type} />

			<h2>Phonebook</h2>
			<Filter filterText={newFilter} changeFunction={handleFilterChange} />

			<h3>Add a new</h3>
			<PersonForm
				submitFunction={addOrUpdatePerson}
				nameValue={newName}
				nameChangeFunction={handleNameChange}
				numberValue={newNumber}
				numberChangeFunction={handleNumberChange}
			/>

			<h2>Numbers</h2>
			<Persons filteredPersons={personsToShow} deleteFunction={deletePerson} />
		</div>
	);
};

export default App;
