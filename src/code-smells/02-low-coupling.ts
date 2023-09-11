//https://gist.github.com/Klerith/1cdbbe863df646b043a437df97eebb01
(() => {
  // Aplicando el principio de responsabilidad única
  // Prioriza la composición frente a la herencia

  type Gender = "M" | "F";

  interface PersonProps {
    firstName: string;
    lastName: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public firstName: string;
    public lastName: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ firstName, lastName, gender, birthdate }: PersonProps) {
      this.lastName = lastName;
      this.firstName = firstName;

      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }
  class User {
    public email: string;
    public role: string;
    private lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastFolderOpen: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastFolderOpen: string;

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
    }
  }

  // Nuevo User Settings
  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastFolderOpen: string;
    role: string;
    workingDirectory: string;
    lastName: string;
    firstName: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      gender,
      birthdate,
      email,
      lastName,
      firstName,
      role,
      workingDirectory,
      lastFolderOpen,
    }: UserSettingsProps) {
      this.person = new Person({ lastName, firstName, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastFolderOpen });
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date("1985-10-21"),
    email: "fernando@google.com",
    gender: "M",
    lastFolderOpen: "/home",
    role: "Admin",
    workingDirectory: "/usr/home",
    firstName: "Fer",
    lastName: "G",
  });

  console.log({
    userSettings,
    credentials: userSettings.user.checkCredentials(),
  });
})();
