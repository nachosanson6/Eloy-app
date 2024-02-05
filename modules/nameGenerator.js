function generateName(type, materials, existingNames) {
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
        const baseName = count > 1 ? `${material} ${count}` : material;
        return baseName;
    });

    const finalName = nameParts.join('_');

    // Agregar el prefijo según el tipo (cuadro, escultura, bisutería)
    let prefixedName = `${type} en `;

    if (materials.length === 1) {
        // Si hay un solo material, no es necesario separar con "y"
        prefixedName += finalName;
    } else if (materials.length === 2) {
        // Si hay dos materiales, separar con "y"
        prefixedName += `${finalName.replace('_', ' y ')}`;
    } else {
        // Si hay tres o más materiales, separar con comas y "y"
        const lastMaterial = materials.pop();
        prefixedName += `${materials.join(', ')} y ${lastMaterial}`;
    }

    // Verificar si el nombre ya existe en la base de datos
    let index = 1;
    let uniqueName = `${prefixedName} ${index}`;
    while (existingNames.includes(uniqueName)) {
        index++;
        uniqueName = `${prefixedName} ${index}`;
    }

    return uniqueName;
}

module.exports = generateName;