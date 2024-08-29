import React from 'react'
import ReactDOM from 'react-dom/client'

function SobreContent() {
  return (
    <div class="sobre">
      <br />
      <br />
      <p>O <b>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo</b> - é uma autarquia federal de ensino.</p>
      <br />
      <p>Fundada em 1909, como Escola de Aprendizes Artífices, é reconhecida pela sociedade paulista por sua excelência no ensino público gratuito de qualidade.</p>
      <br />
      <p>Durante sua história, recebeu, também, os nomes de Escola Técnica Federal de São Paulo e Centro Federal de Educação Tecnológica de São Paulo. Com a transformação em Instituto, em dezembro de 2008, passou a ter relevância de universidade, destacando-se pela autonomia.</p>
      <br />
      <p>Com a mudança, o Instituto Federal de São Paulo passou a destinar 50% das vagas para os cursos técnicos e, no mínimo, 20% das vagas para os cursos de licenciatura, sobretudo nas áreas de Ciências e da Matemática. Complementarmente, continuará oferecendo cursos de formação inicial e continuada, tecnologias, engenharias e pós-graduação.</p>
      <br />
      <p>Além dos cursos presenciais, o Instituto Federal de São Paulo oferece os cursos Técnicos em Administração e em Informática para Internet e, a partir de 2012, o superior de Formação Pedagógica e o de Tecnologia em Gestão Pública na modalidade de Educação a Distância (EaD).</p>
      <br />
      <p>O IFSP é organizado em diversos campos e possui mais de 40 mil alunos matriculados nas 36 unidades distribuídas pelo estado de São Paulo.</p>
      <br />
      <p>Localizado em <b>Rua Pedro Vicente, 625 - Canindé - São Paulo - SP - Brasil - CEP: 01109-010</b></p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('sobreMain')).render(
  <React.StrictMode>
    <SobreContent />
  </React.StrictMode>
)
