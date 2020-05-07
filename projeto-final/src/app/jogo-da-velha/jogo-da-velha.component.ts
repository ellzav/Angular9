import { JogoDaVelhaService } from './shared/jogo-da-velha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService:JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }
/**
 * Retorna se o ecrã de inicio deve ser mostrada
 * 
 * @return boolean
 */
  get showInicio(): boolean{
    return this.jogoDaVelhaService.showInicio;
  }
   /**
     * 
     * Retorna se o tabuleiro deve ser exibido
     * 
     * @return boolean
     */
    get showTabuleiro(): boolean{
      return this.jogoDaVelhaService.showTabuleiro;
    }

    /**
     * Retorna se o ecrã final deve ser exibido
     * 
     * @return boolean
     */
    get showFinal():boolean{
      return this.jogoDaVelhaService.showFinal;
    }
    /**
     * Iicia os dados de um novo jogo
     * 
     * @return void
     */
    iniciarJogo($event: any): void {
      $event.preventDefault();
      this.jogoDaVelhaService.iniciarJogo();
    }
    /**
     * Realiza uma jogada ao clicar num local do
     * tabuleiro.
     * 
     * @param number posX
     * @param number posY
     * @return void
     */
    jogar(posX:number, posY:number):void{
      this.jogoDaVelhaService.jogar(posX,posY);
    }
    /**
     * Retorna se a peça x deve ser exibida para
     * a coordenada informada
     * 
     * @param number posX
     * @param number posY
     * @return boolean
     */
    exibirX(posX:number, posY:number):boolean {
      return this.jogoDaVelhaService.exibirX(posX,posY);
    }
    /**
     * Retorna se a peça o deve ser exibida para
     * a coordenada informada
     * 
     * @param number posX
     * @param number posY
     * @return boolean
     */
    exibirO(posX:number, posY:number):boolean {
      return this.jogoDaVelhaService.exibirO(posX,posY);
    }
    /**
     * Retorna se a marcação de vitoria
     * deve ser exibida para a cordenada
     * informada
     * 
     * @param number posX
     * @param number posY
     * @return boolean
     */
     exibirVitoria(posX:number, posY:number):boolean {
      return this.jogoDaVelhaService.exibirVitoria(posX,posY);
    }

    /**
     * Retorna o nº do jogador a jogar
     * 
     * @return number
     */
    get jogador():number{
      return this.jogoDaVelhaService.jogador;
    }
    /**
     * Retorna o nº do jogador a jogar
     * 
     * @return number
     */
    /**
     * inicia um novo jogo
     * 
     * @return void
     */
    novoJogo($event): void {
      $event.preventDefault();
      this.jogoDaVelhaService.novoJogo();
    }
}
