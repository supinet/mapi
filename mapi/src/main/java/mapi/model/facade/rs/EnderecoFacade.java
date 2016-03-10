package mapi.model.facade.rs;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import mapi.model.domain.Endereco;
import mapi.model.service.EnderecoService;

@Path("/endereco")
@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
@Consumes(MediaType.APPLICATION_JSON)
public class EnderecoFacade {
	
	@Inject
	private EnderecoService enderecoService;
	
	@GET
	public List<Endereco> getEnderecos() {
		return this.enderecoService.getEnderecos();
	}
	
	@POST
	public Endereco salvar(Endereco endereco) {
		return this.enderecoService.salvar(endereco);
	}
	
	@PUT
	public void atualizar(Endereco endereco) {
		this.enderecoService.atualizar(endereco);
	}
	
	@DELETE
	@Path("/{codigo}")
	public void excluir(@PathParam("codigo") int codigo) {
		Endereco endereco = new Endereco();
		endereco.setCodigo(codigo);
		this.enderecoService.excluir(endereco);
	}

}
