function dataGene(noOf) {
    const userIdPrefix = 'USR';
    const status = ['admin', 'editor', 'viewer'];

    for (let i = 1; i <= noOf; i++) {
        const role = status[(i - 1) % status.length];

        console.log(`user id ${userIdPrefix}-${String(i).padStart(4, '0')}`);
        console.log(`|TestUser_${i}`);
        console.log(`|testuser${i}@testingacademy.com`);
        console.log(`|${role}`);
        console.log(i % 3 === 0 ? 'Inactive' : 'Active');
    }
}


dataGene(8)