//https://gist.github.com/Klerith/787da77f48c6e513e8326ffe7bce059a

//https://gist.github.com/Klerith/a5ea5db38b60149e2941fdce4248ecf5

(() => {
  // Aplicando el principio de responsabilidad unica
  // Priorizar la composicion frente a la herencia

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public lastAccess: Date;
    public email: string;
    public role: string;
    constructor({ email, role }: UserProps) {
      // super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      // super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "fernando@google.com",
    role: "Admin",
    name: "Fernando",
    gender: "M",
    birthdate: new Date("1985"),
  });

  console.log({ userSettings });
})();
