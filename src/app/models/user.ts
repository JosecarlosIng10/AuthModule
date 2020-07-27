export class User {
    username: String;
    password: String;
    personalInfo = new PersonalInfo;
    workInfo = new WorkInfo;

}

export class PersonalInfo {
    name: string;
    lastName: string;
    email: string;
    phone: string;
}

export class WorkInfo {
    name: string;
    phone: string;
}