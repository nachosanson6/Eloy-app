function generateName(materials, existingNames) {
    const materialCount = {};

    // Construir un objeto que almacene la cantidad de cada material
    materials.forEach(material => {
        if (materialCount[material]) {
            materialCount[material]++;
        } else {
            materialCount[material] = 1;
        }
    });

    // Construir el nombre con números si se repite el material
    const nameParts = materials.map(material => {
        const count = materialCount[material];
        const baseName = count > 1 ? `${material}-${count}` : material;
        return baseName;
    });

    const finalName = nameParts.join('_');

    // Verificar si el nombre ya existe en la base de datos
    let index = 1;
    let uniqueName = finalName;
    while (existingNames.includes(uniqueName)) {
        index++;
        uniqueName = `${finalName}-${index}`;
    }

    return uniqueName;
}

module.exports = generateName;