import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {

  HeaderImage,

} from "../../styles/header";

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography sx={{ my: 1  }}>
      <HeaderImage sx={{width:"50%"}} src="/images/main-logo.png" />
      </Typography>
      <Divider sx={{  boxShadow: 3}} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar sx={{backgroundColor:'white', color:'black'}} component="nav">
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <HeaderImage src="/images/main-logo.png" />

          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000000' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ratione eveniet non tenetur hic minima sint. Illo asperiores dolor alias molestiae nam mollitia, facere omnis pariatur perspiciatis architecto nostrum quos cum nesciunt laudantium! Ipsa praesentium quae quisquam voluptates mollitia temporibus nostrum eos quam a! Sint eligendi in maiores hic vero quas maxime perspiciatis! Maxime rem cumque, assumenda pariatur cum quisquam id esse commodi reprehenderit provident. Quos ipsa minima impedit magnam qui esse praesentium voluptas commodi excepturi odio reprehenderit, ratione quibusdam expedita accusantium facere nam sint fugiat eius, alias omnis temporibus libero enim? Eos nulla eligendi ipsum quidem ducimus reprehenderit fugit fugiat! Sapiente quisquam provident odio reiciendis molestiae? Aliquid, iste, iure necessitatibus assumenda unde magni minima vitae ducimus doloribus hic fugit explicabo laudantium odio et blanditiis officiis beatae laboriosam ipsa obcaecati laborum deserunt culpa. Dolor, accusamus dicta commodi cupiditate maxime eligendi vel iure aliquam. Libero hic deserunt iusto quibusdam dolor? Cum quas necessitatibus illum, ab aut molestias voluptatem, quam deleniti placeat repudiandae maxime iusto optio. Dicta, ad harum! Facilis repellat ipsam in ullam tempore? Tempore ut, id sunt facilis expedita molestiae nobis dicta soluta laudantium distinctio, nulla dignissimos, accusantium obcaecati voluptates repellendus nesciunt provident officiis adipisci quos possimus dolorum quasi quo natus exercitationem? Vel, laudantium delectus. Sequi atque exercitationem, nostrum voluptates aspernatur voluptate impedit ipsam deleniti, dignissimos neque dolor quos sit corporis et, debitis soluta. Eaque sed perspiciatis aperiam qui maxime pariatur aliquam vel, reiciendis aut accusantium ducimus enim eos nemo nesciunt. Accusamus soluta consequatur saepe repellendus, omnis debitis nostrum nobis nihil voluptas, ea eius similique cupiditate possimus rem at cumque corrupti praesentium molestiae. Modi possimus dignissimos eius, eum nihil pariatur dolore? Dicta magnam autem voluptate illo ipsum quis nobis, blanditiis architecto reiciendis provident hic, tempore laboriosam aliquid aperiam corrupti, cupiditate quos. Qui impedit nisi, expedita cumque maxime dolorum provident adipisci maiores id ducimus eos nihil officiis et voluptas eligendi ea assumenda sint porro saepe a excepturi voluptates doloribus similique. Nihil obcaecati accusamus dignissimos perferendis repudiandae. Ipsa, accusamus? Incidunt atque facilis impedit libero ipsam sit eum? Deserunt mollitia ullam illum magnam enim aliquam, consequuntur laboriosam. Distinctio sunt ipsa ea consectetur eos aspernatur magni modi unde dolore minus impedit quae animi harum praesentium, vitae hic blanditiis! Amet omnis veritatis vero, nulla, quisquam doloremque explicabo quia itaque deleniti odit modi. Deleniti natus tenetur ratione odit excepturi. Libero perspiciatis ea delectus est odio itaque inventore, neque perferendis deserunt tempora ipsam id aspernatur quos vel quisquam ipsum porro nam? Aspernatur cum voluptatibus quidem nemo. Illo neque est rem placeat, sequi iure quo nisi in temporibus similique repellendus qui exercitationem et eos corporis! Nisi, explicabo. Nesciunt ducimus accusamus, iste delectus, quibusdam sequi cum laudantium ipsam illum veritatis autem magnam neque omnis porro impedit tenetur eligendi. Error numquam enim sapiente delectus assumenda nulla officia, dolores deleniti debitis qui explicabo. Impedit eaque reiciendis molestiae quasi et aliquam. Doloribus nobis inventore est eligendi consequatur omnis vel, quas doloremque minus quasi voluptas aut nesciunt fugit quidem natus enim, laudantium corporis facere voluptatum minima error aperiam iste! Nulla a explicabo incidunt odit saepe ratione quisquam? Mollitia, ipsa delectus aliquid quibusdam voluptas ipsam. Explicabo sed quae cumque accusantium saepe similique ad fugit incidunt pariatur deleniti officiis repellendus sunt doloremque eaque deserunt hic nesciunt magnam ducimus, distinctio qui quam eum. Pariatur molestiae ad numquam, explicabo ex quaerat maiores placeat aut eius modi nisi accusantium amet ipsa maxime sit minus. Cum doloribus incidunt quidem culpa illo dolorum rem placeat! Inventore nobis quibusdam omnis quam numquam minus, explicabo aliquam qui fugit, distinctio nihil rerum natus quia non adipisci nemo aliquid earum repellendus repellat molestiae sed! Rerum, deserunt omnis alias rem suscipit aliquid nisi distinctio nostrum quisquam dolorem atque architecto dolore iusto dicta assumenda, cupiditate molestiae amet sequi, placeat nulla ipsa! Explicabo, unde doloribus enim exercitationem quaerat magnam dolorum, dignissimos voluptate accusantium perferendis labore magni sapiente facilis placeat ad aliquam obcaecati, neque perspiciatis amet! Doloremque suscipit est porro, tempore quas in officia molestiae quae qui ducimus aperiam, eos similique quasi iste voluptatum minus incidunt aspernatur. Repellat nostrum totam dignissimos et ab culpa provident laborum commodi rerum maiores assumenda dolorum ullam, non nobis sit, fugit quos dolorem officiis aliquid architecto fuga minima. Nobis officia a sequi aut sint quidem vero, harum, libero dicta et cumque modi saepe error eum consequuntur odit fugit praesentium? Expedita, doloribus ducimus consequuntur vitae nobis dolorum? Inventore, laborum similique. Recusandae ut, placeat quod repellendus pariatur tenetur reprehenderit! Veritatis quo natus dolorem nisi distinctio sed officiis vel non quos cum reiciendis dicta tenetur ducimus voluptas nesciunt, dolores obcaecati mollitia adipisci, perferendis accusantium. Ducimus, aut vel eveniet incidunt impedit officiis consequuntur odio sit at molestias error quos molestiae! Repellendus nemo quod eos rerum, itaque, atque inventore at natus voluptatem, omnis molestiae quidem? Minus consequuntur expedita assumenda! Ducimus corporis nam, modi vero nostrum, dolorum autem, in reprehenderit fugit nemo necessitatibus dicta animi dolorem sed earum accusamus! Libero neque deleniti eligendi eum saepe eius vitae quaerat ipsum quia? Recusandae nam tempora tempore ratione, neque magni adipisci repellat laborum sed porro dolor rerum consectetur rem a amet eveniet aperiam temporibus praesentium assumenda voluptatum hic accusantium. Repudiandae cum soluta iure debitis. Itaque velit omnis sed unde earum sit cupiditate praesentium doloribus error iusto necessitatibus culpa quod, animi natus sunt! Earum odio impedit, esse officia ex iusto eum nulla quod consectetur unde molestiae doloribus laudantium aliquam nemo voluptatem quos debitis facere suscipit officiis. Pariatur numquam illo, adipisci totam voluptas exercitationem ratione! Libero perferendis exercitationem, iusto hic fugit vel reiciendis autem provident aut impedit possimus odit, corporis incidunt a distinctio at eius dolores quasi delectus maxime rem adipisci ad eos voluptatum! Et adipisci animi explicabo unde dolor doloribus delectus ipsam odio nam labore distinctio debitis, necessitatibus possimus eum, cum consectetur! Natus, quas officia! Mollitia possimus consequatur quaerat vel modi quibusdam libero aliquid sunt, odio quae deserunt, voluptatum quis doloremque quos vero voluptas, reprehenderit recusandae doloribus iure deleniti voluptate soluta fugiat! Ipsum, deserunt quos. Libero commodi architecto non veniam vero cupiditate quod omnis delectus iste, saepe iusto debitis! Delectus voluptatem harum aspernatur, ea unde minus praesentium aperiam, blanditiis officiis eius omnis. Tenetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
          at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
          Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
          numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
          asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
          assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
          soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
          ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
          Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
          delectus quo eius exercitationem tempore. Delectus sapiente, provident
          corporis dolorum quibusdam aut beatae repellendus est labore quisquam
          praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
          deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
          fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
          recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
