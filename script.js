function findDimensionalFormula() {
    const quantity = document.getElementById('quantity').value.toLowerCase();
    let formula = '';
    switch (quantity) {
        case 'length':
            formula = 'L';
            break;
        case 'mass':
            formula = 'M';
            break;
        case 'time':
            formula = 'T';
            break;
        case 'electric current':
            formula = 'I';
            break;
        case 'temperature':
            formula = 'Θ';
            break;
        case 'amount of substance':
            formula = 'N';
            break;
        case 'luminous intensity':
            formula = 'J';
            break;
        case 'velocity':
            formula = 'L T '** (-2);
            break;
        case 'acceleration':
            formula = 'L T^-2';
            break;
        case 'force':
            formula = 'M L T^-2';
            break;
        case 'work':
            formula = 'M L^2 T^-2';
            break;
        case 'power':
            formula = 'M L^2 T^-3';
            break;
        case 'pressure':
            formula = 'M L^-1 T^-2';
            break;
        case 'density':
            formula = 'M L^-3';
            break;
        case 'impulse':
            formula = 'M L T^-1';
            break;
        case 'momentum':
            formula = 'M L T^-1';
            break;
        case 'electric charge':
            formula = 'I T';
            break;
        case 'electric potential':
            formula = 'M L^2 T^-3 I^-1';
            break;
        case 'resistance':
            formula = 'M L^2 T^-3 I^-2';
            break;
        case 'capacitance':
            formula = 'M^-1 L^-2 T^4 I^2';
            break;
        case 'magnetic field':
            formula = 'M T^-2 I^-1';
            break;
        case 'magnetic flux':
            formula = 'M L^2 T^-2 I^-1';
            break;
        case 'inductance':
            formula = 'M L^2 T^-2 I^-2';
            break;
        case 'frequency':
            formula = 'T^-1';
            break;
        case 'wave number':
            formula = 'L^-1';
            break;
        case 'gravitational constant':
            formula = 'M^-1 L^3 T^-2 I^2';
            break;
        case 'surface tension':
            formula = 'M T^-2';
            break;
        case 'viscosity':
            formula = 'M L^-1 T^-1';
            break;
        case 'thermal conductivity':
            formula = 'M L T^-3 Θ^-1';
            break;
        case 'specific heat capacity':
            formula = 'L^2 T^-2 Θ^-1';
            break;
        case 'latent heat':
            formula = 'M L^2 T^-2 Θ^-1';
            break;
        case 'electromotive force':
            formula = 'M L^2 T^-3 I^-1';
            break;
        case 'specific volume':
            formula = 'L^3 M^-1';
            break;
        case 'gravitational potential energy':
            formula = 'M L^2 T^-2';
            break;
        case 'specific energy':
            formula = 'L^2 T^-2';
            break;
        case 'moment of inertia':
            formula = 'M L^2';
            break;
        case 'angular momentum':
            formula = 'M L^2 T^-1';
            break;
        case 'torque':
            formula = 'M L^2 T^-2';
            break;
        case 'angular velocity':
            formula = 'T^-1';
            break;
        case 'angular acceleration':
            formula = 'T^-2';
            break;
        case 'magnetic field strength':
            formula = 'M T^-2 I^-1';
            break;
        case 'electric flux':
            formula = 'M L^2 T^-3 I^-1';
            break;
        case 'magnetic flux density':
            formula = 'M T^-2 I^-1';
            break;
        case 'electric field strength':
            formula = 'M L T^-3 I^-1';
            break;
        case 'inductive reactance':
            formula = 'M L^2 T^-3 I^-2';
            break;
        case 'capacitive reactance':
            formula = 'M^-1 L^-2 T^4 I^2';
            break;
        case 'relative permeability':
            formula = 'dimensionless';
            break;
        case 'permittivity':
            formula = 'M^-1 L^-3 T^4 I^2';
            break;
        case 'permeability':
            formula = 'M L T^-2 I^-2';
            break;
        case 'enthalpy':
            formula = 'M L^2 T^-2';
            break;
        case 'entropy':
            formula = 'M L^2 T^-2 Θ^-1';
            break;
        case 'thermal resistance':
            formula = 'M^-1 L^-2 T^3 Θ^-1';
            break;
        case 'thermal expansion coefficient':
            formula = 'L^-1 Θ^-1';
            break;
        case 'heat capacity':
            formula = 'M L^2 T^-2 Θ^-1';
            break;
        case 'specific weight':
            formula = 'M L^-2 T^-2';
            break;

        default:
            formula = 'we dont have that quantity on list.';
    }
    document.getElementById('result').innerText = `Dimensional Formula: ${formula}`;
}